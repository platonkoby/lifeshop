import { CalculateBalance, CalculateSumProps, ModifyListProps, UpdateListProps } from "../models/cart.models"
import { Item } from "../models/items.models"

export class Cart {
    public static CalculateSum({shopItems, goalItems} : CalculateSumProps) {
        return addValuesInList(goalItems) - addValuesInList(shopItems)
    }
    
}

const addValuesInList = (list : Item[]) => {
    if (list.length === 0) return 0
    return list
        .map(item => item.value * item.amount)
        .reduce((n, n1) => n + n1)
}

const increaseItemAmount = (list: Item[], item: Item) => (
    list
        .map(listItem => listItem.name === item.name 
            ? {...listItem, amount: listItem.amount + 1}
            : listItem
            )
)

const decreaseItemAmount = (list: Item[], item: Item) => (
    list
    .map(listItem => listItem.name === item.name
            ? {...listItem, amount: listItem.amount - item.amount} 
            : {...listItem, amount: 0}
        )
)

const addItemToList = ({list, item, setList} : ModifyListProps) => (
    list.find(listItem => item.name === listItem.name)
            ? setList((goalList) => increaseItemAmount(goalList, item))
            : setList((goalList) => [...goalList, {...item, amount: 1}])
)

const removeItemFromList = ({list, item, setList} : ModifyListProps) => (
    list.find(listItem => listItem.name === item.name)
        && setList((goalList) => decreaseItemAmount(goalList, item))
)

export function updateList({list, item, setList, action} : UpdateListProps) {
    action === 'add'
        ? addItemToList({list, item, setList})
        : removeItemFromList({list, item, setList})
}
