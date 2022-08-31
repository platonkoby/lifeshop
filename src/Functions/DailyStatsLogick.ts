import { stat } from "fs";
import { nanoid } from "nanoid";
import { dailyStatsRequest, updateDocumentInCollection } from "../firebase/firestore";
import { Item } from "../models/items.models";
import { DailyStat, LocalData } from "../models/stats.models";
import { nullDataError, retrieveLocalData, setLocalStorageData } from "./DbFuncs";
import { stringArraysAreSame } from "./GlobalFunctions";
import { getTime, getToday, setToday } from "./Today";

export const localData : LocalData = {
    GOAL_ITEMS: {
        key: 'goal items',
        value: { name: 'goal items', value: [], default: [], type: 'iterable', id: nanoid() },
        hasDefault: true,
    },
    SHOP_ITEMS: {
        key: 'shop items',
        value: { name: 'shop items', value: [], default: [], type: 'iterable', id: nanoid() },
        hasDefault: true,
    },
    TODAY: {
        key: 'today',
        value: getToday(),
        updateTime: getTime(),
        hasDefault: false,
    }
}

const { SHOP_ITEMS, GOAL_ITEMS } = localData

export function getDailyStats() : DailyStat[] {

    const shopItems = retrieveLocalData(SHOP_ITEMS.key) as DailyStat
    const goalItems = retrieveLocalData(GOAL_ITEMS.key) as DailyStat

    return [ shopItems, goalItems ]
}

// export function getDbDailyStat(dailyStat : DailyStat) {
//     const data = getDailyStats()
//     const stat = data.find((stat) => stat.id === dailyStat.id)
//     return stat
// }

async function resetDailyStats(newStats : DailyStat[]) {
    for (let item in localData) {
        const stat = localData[item as keyof LocalData]
        if (stat.hasDefault) {
            localStorage.removeItem(stat.key)
        } 
    }

    newStats.forEach((stat) => setLocalStorageData(stat.name, stat))
}

function setDailyStatsToDefault() {
    const stats = getDailyStats()
    const statsWithDefaults = stats.filter((stat) => typeof stat.default !== "undefined")
    const resetedStats = () => statsWithDefaults.map((stat) => ({...stat, value: stat.default })) as DailyStat[]
    resetDailyStats(resetedStats())
}


export function updateDailyStats( goalItemsFromCart : Item[], shopItemsFromCart : Item[] ) {
    const [ shopItems, goalItems ] = getDailyStats()
    if (thereAreChanges(shopItems, shopItemsFromCart)) {
        const newList = updateDailyItemList(shopItemsFromCart, shopItems)
        const newShopStats = { ...shopItems, value: newList }
        setLocalStorageData(SHOP_ITEMS.key, newShopStats)
    }

    if (thereAreChanges(goalItems, goalItemsFromCart)) {
        const newList = updateDailyItemList(goalItemsFromCart, goalItems)
        const newGoalStats = { ...goalItems, value: newList }
        setLocalStorageData(GOAL_ITEMS.key, newGoalStats)
    }
}

function thereAreChanges(itemStats : DailyStat, itemList : Item[]) {
    return !stringArraysAreSame(
        statIfTypeIsIterable(itemStats).value,
        getItemNames(itemList))
}

function updateDailyItemList(itemList : Item[], dailyStat : DailyStat) {
    if(dailyStat.type !== 'iterable') throw new Error(`dailyStat.type is not "iterable", it is ${dailyStat.type}`)
    const itemNames = itemList.map(item => item.name)
    return Array.from(new Set([...dailyStat.value, ...itemNames]))
}

export async function refreshDailyStats() {
    setToday(getToday())
    setDailyStatsToDefault()
}

function getItemNames(items : Item[]) {
    return items.map((item) => item.name)
}

function statIfTypeIsIterable(stat : DailyStat) {
    if (stat.type === "iterable") return stat
    throw new Error(`${stat} is not iterable, it is ${stat.type}`)
}



