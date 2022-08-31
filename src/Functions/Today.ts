import { createDocumentInCollection, dailyStatsRequest, updateDocumentInCollection } from "../firebase/firestore";
import { Today } from "../models/stat.models";
import { getDailyStats, refreshDailyStats } from "./DailyStatsLogick";
import { setLocalStorageData } from "./DbFuncs";

export const getTime = () => {
    const today = new Date();
    return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
}

export function setToday(today : string) {
    setLocalStorageData("today", {
        name: 'today', value: today, updateTime: getTime(),
    })
}

export const getToday = () => new Date().toLocaleDateString()

async function checkToday() {
    const lsToday = lsGet('today', 'something is wrong with "today" in local storage') as Today
    const today = getToday()
    return lsToday.value === today
}

export async function updateToday() {
    await checkToday() || refreshDailyStats()
}

const lsGet = ( lsItemName : string, errorMsg: string ) => {
    const val = localStorage.getItem(lsItemName)
    if (val === null) throw new Error(errorMsg)
    return JSON.parse(val)
}