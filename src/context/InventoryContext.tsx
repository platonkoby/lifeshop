import { createContext, useEffect, useState } from "react";
import { goalsRequest, shopRequest } from "../firebase/firestore";
import { updateList } from "../Functions/CartLogick";
import { retrieveData } from "../Functions/DbFuncs";
import { EditListAction, GoalsContextType, ShopContextType } from "../models/cart.models";
import { Children } from "../models/global.models";
import { GoalItem, ShopItem } from "../models/items.models";

export const ShopInventoryContext = createContext<ShopContextType>({
    itemList: [],
    updateList: () => {}
})

export const GoalInventoryContext = createContext<GoalsContextType>({
    itemList: [],
    updateList: () => {}
})

export default function InventoryContextProvider({ children } : Children) {

    const [shopInventory, setShopInventory] = useState<ShopItem[]>([]);
    const updateShopInventory = (item: ShopItem, action: EditListAction) => {
        updateList({list: shopInventory, item, setList: setShopInventory, action})
    }

    const [goalsInventory, setGoalsInventory] = useState<GoalItem[]>([])
    const updateGoalsInventory = (item: GoalItem, action: EditListAction) => {
        updateList({list: goalsInventory, item, setList: setGoalsInventory, action})
    }

    //retrieve inventories from database
    useEffect(() => {
        retrieveData(shopRequest, setShopInventory)
    }, [])

    useEffect(() => {
        retrieveData(goalsRequest, setGoalsInventory)
    }, [])

    return (
        <ShopInventoryContext.Provider value={{itemList: shopInventory, updateList: updateShopInventory}}>
            <GoalInventoryContext.Provider value={{itemList: goalsInventory, updateList: updateGoalsInventory}}>
                {children}
            </GoalInventoryContext.Provider>
        </ShopInventoryContext.Provider>
    )
}