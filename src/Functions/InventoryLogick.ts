import { SetStateAction } from "react";
import { Item, ModifyList } from "../models/items.models";
import { decreaseItemAmount, deleteItem, increaseItemAmount, updateItem } from "./ItemLogick";


export const modifyInventory : ModifyList = ({list, item, setList, action}) => {
    let newList = [...list]

    if (action === 'delete') {
        newList = deleteItem(list, item)
    }
    if (action === 'update') {
        newList = updateItem(list, item)
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