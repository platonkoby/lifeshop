import { SetStateAction } from "react";
import { Item, ModifyList } from "../models/items.models";
import { createItemInDb, removeItemInDb } from "./DbFuncs";
import { decreaseItemAmount, deleteItem, increaseItemAmount, updateItem } from "./ItemLogick";


export const modifyInventory : ModifyList = ({list, item, setList, action}) => {
    let newList = [...list]

    if (action === 'delete') {
        newList = deleteItem(list, item)
        removeItemInDb(item, item.type)
    }
    if (action === 'update') {
        newList = updateItem(list, item)
        createItemInDb(item, item.type)
    }
    if (action === 'increment') {
        newList = increaseItemAmount(list, item)
    }
    if (action === 'decrement') {
        newList = decreaseItemAmount(list, item)
    }

    setList(newList)
}

export const clearInventory = (list : Item[] , setList : (callback : SetStateAction<Item[]>) => void) => {
    setList((list) => list.map(item => ({...item, amount: 0})));
}