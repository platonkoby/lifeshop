import { ModifyList } from "../models/items.models";
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

