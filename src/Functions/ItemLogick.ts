import { ListAction } from "../models/inventory.models";
import { Item } from "../models/items.models";
import { listAdd, listFilter } from "./GlobalFunctions";

export const deleteItem : ListAction = (list, item) => listFilter<Item>(list, item, 'name')

export const updateItem : ListAction = (list, item) => {
    const filteredList = deleteItem(list, item);
    const updatedList = listAdd(filteredList, item);
    return updatedList
}

export const increaseItemAmount: ListAction = (list, item) => {
    const filteredList = deleteItem(list, item);
    const updatedList = listAdd(filteredList, {...item, amount: item.amount + 1})
    return updatedList
}

export const decreaseItemAmount: ListAction = (list, item) => {
    const filteredList = deleteItem(list, item);
    const updatedList = listAdd(filteredList, {...item, amount: item.amount - 1})
    return updatedList
}
