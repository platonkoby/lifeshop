import { createContext, useState } from "react";
import { CalculateSumProps, CalculateBalance, GoalsContextType, ShopContextType, UpdateListProps, EditListProps, EditListAction } from "../models/cart.models";
import { Children } from "../models/global.models";
import { GoalItem, Item, ShopItem } from "../models/items.models";

export const ShopContext = createContext<ShopContextType>({
    itemList: [],
    updateList: () => {}
});

export const GoalsContext = createContext<GoalsContextType>({
    itemList: [],
    updateList: () => {}
});

export default function CartContextProvider({ children } : Children) {
    
    const [shopList, setShopList] = useState<ShopItem[]>([])
    const updateShopList = (item : ShopItem, action: EditListAction) => {
        updateList({list: shopList, item, setList: setShopList, action})
    }

    const [goalList, setGoalList] = useState<GoalItem[]>([])
    const updateGoalList = (item : GoalItem, action : EditListAction) => {
        updateList({list: goalList, item, setList: setGoalList, action})
    }

    return (
        <ShopContext.Provider value={{itemList: shopList, updateList: updateShopList}}>
            <GoalsContext.Provider value={{itemList: goalList, updateList: updateGoalList}}>
                {children}
            </GoalsContext.Provider>
        </ShopContext.Provider>
    )        
}

export class Cart {
    static CalculateSum({shopItems, goalItems} : CalculateSumProps) {

        return addValuesInList(goalItems) + addValuesInList(shopItems)
    }

    static CalculateBalance({shopItems, goalItems, balance} : CalculateBalance) {

        return balance + this.CalculateSum({shopItems, goalItems})
    }

    
}

const addValuesInList = (list : Item[]) => (
    list
        .map(item => item.value)
        .reduce((n, n1) => n + n1)
)

const increaseItemAmount = (list: Item[], item: Item) => (
    list
        .map(listItem => listItem.name === item.name 
            ? {...listItem, amount: listItem.amount + item.amount}
            : listItem
            )
)

const decreaseItemAmount = (list: Item[], item: Item) => (
    list
    .map(listItem => listItem.name === item.name
            ? {...listItem, amount: listItem.amount - item.amount} 
            : listItem
        )
    .filter(listItem => listItem.amount  > 0)
)

const addItemToList = ({list, item, setList} : EditListProps) => (
    list.find(listItem => item.name === listItem.name)
            ? setList((goalList) => increaseItemAmount(goalList, item))
            : setList((goalList) => [...goalList, item])
)

const removeItemFromList = ({list, item, setList} : EditListProps) => (
    list.find(listItem => listItem.name === item.name)
        && setList((goalList) => decreaseItemAmount(goalList, item))
)

function updateList({list, item, setList, action} : UpdateListProps) {
    action === 'add'
        ? addItemToList({list, item, setList})
        : removeItemFromList({list, item, setList})
}
    