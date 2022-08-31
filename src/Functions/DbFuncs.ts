import { DocumentData, QuerySnapshot } from "firebase/firestore";
import { nanoid } from "nanoid";
import React from "react";
import { Item } from "../models/items.models";
import { LocalData } from "../models/stats.models";
import { localData } from "./DailyStatsLogick";
import { getTime, getToday } from "./Today";



export const retrieveData = (request : Promise<QuerySnapshot<DocumentData>>, setAction : React.Dispatch<React.SetStateAction<Item[]>>) => (
    request
    .then((snapshot) => snapshot.docs.map((item) => item.data()))
    .then((itemList) => setAction([...itemList as Item[]]))
)

export const retrieveLocalData = ( key : string ) => {
    const data = localStorage.getItem(key)
    nullDataError(key, data)
    const parse = (data : string) => JSON.parse(data)
    return parse(data ? data : '')
}

export const setLocalStorageData = (key : string, value : any) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const createDummyData = () => 
      localStorage.setItem('daily-stats', JSON.stringify([
        {default: [], name: "shop items", value: [], type: 'iterable'},
        {default: [], name: "goal items", value: [], type: 'iterable'}
    ]))

export const confirmLocalDataExists = () => {
    for (let item in localData) {
        const key = localData[item as keyof LocalData].key
        if (!localStorage.getItem(key)) {
            createInitialLocalData(key)
        }
    }
}

export const createInitialLocalData = (givenKey : string) => {

    for (let item in localData) {
        const localDataItem = localData[item as keyof LocalData]
        if (localDataItem.key === givenKey)
        setLocalStorageData(givenKey, localDataItem.value)
    }

}

const validDataKey = (givenKey: string) => {
    for (let key in localData) {

        if (localData[key as keyof LocalData].key === givenKey )
        return true        
    }
    return false
}

export const nullDataError = (key : string, data : string | null) => {
    if (!data) {

        if (validDataKey(key)) {
            createInitialLocalData(key)
            return
        }

        throw new Error(`data with key ${key} returned null`)
    }
}