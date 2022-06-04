import { SetStateAction } from "react"
import { CalculateBalance, CalculateSumProps } from "../models/cart.models"
import { ListAction } from "../models/inventory.models"
import { Item, ModifyList } from "../models/items.models"
import { listAdd } from "./GlobalFunctions"
import { decreaseItemAmount, deleteItem, increaseItemAmount, removeZeroAmountItems, updateItem } from "./ItemLogick"

export class Cart {
    public static CalculateSum({shopItems, goalItems} : CalculateSumProps) {
        return addValuesInList(goalItems) - addValuesInList(shopItems)
    }
    
}

export const addValuesInList = (list : Item[]) => {
    if (list.length === 0) return 0
    return list
        .map(item => item.value * item.amount)
        .reduce((n, n1) => n + n1)
}

export const modifyCart : ModifyList = ({list, item, setList, action}) => {
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
    
    newList = removeZeroAmountItems(newList)

    setList(newList)
}

export const clearList = (setList : (callback : SetStateAction<Item[]>) => void) => setList([])