import { createContext } from "react";
import { CalculateSumProps, CalculateBalance, GoalsContextType, ShopContextType } from "../models/cart.models";
import { Item } from "../models/items.models";

const ShopContext = createContext<ShopContextType>({
    itemList: [],
    updateList: () => [],
});

const GoalsContext = createContext<GoalsContextType>({
    itemList: [],
    updateList: () => []
});


export default class Cart {
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