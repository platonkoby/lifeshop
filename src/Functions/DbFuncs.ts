import { DocumentData, QuerySnapshot, setDoc } from "firebase/firestore";
import { nanoid } from "nanoid";
import React from "react";
import { createDocumentInCollection, deleteDocumentInCollection } from "../firebase/firestore";
import { Item, ItemType, ShopItem } from "../models/items.models";
import { LocalData } from "../models/stats.models";
import { localData } from "./DailyStatsLogick";
import { getTime, getToday } from "./Today";


export const createItemInDb = async (item : Item, itemType: ItemType) => {
    if (itemType === 'goal item') {

        await createDocumentInCollection('goals', item.id, item )
    } else if (itemType === 'shop item') {
        
        await createDocumentInCollection('products', item.id, item )
    } else {
        throw Error(`Item type ${itemType} does not exist`)
    }
}

export const removeItemInDb = async (item : Item, itemType: ItemType) => {
    if (itemType === 'goal item') {
        await deleteDocumentInCollection('goals', item.id, item)
    }
    if (itemType === 'shop item') {
        await deleteDocumentInCollection('products', item.id, item)
    } else {
        throw Error(`Item type ${itemType} does not exist`)
    }
}

export const retrieveData = (request : Promise<QuerySnapshot<DocumentData>>, setAction : React.Dispatch<React.SetStateAction<Item[]>>) => (
    request
    .then((snapshot) => snapshot.docs.map((item) => item.data()))
    .then((itemList) => itemList.map((item) => Object.defineProperties(item, {id: {enumerable: false}, amount: {enumerable: false}})))
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