import { createContext, useEffect, useState } from "react";
import { goalsRequest, shopRequest } from "../firebase/firestore";
import { retrieveData } from "../Functions/DbFuncs";
import { modifyInventory } from "../Functions/InventoryLogick";
import { Children } from "../models/global.models";
import { GoalsInventoryContextType, ShopInventoryContextType, UpdateInventory } from "../models/inventory.models";
import { GoalItem, ShopItem } from "../models/items.models";

export const ShopInventoryContext = createContext<ShopInventoryContextType>({
    itemList: [],
    updateList: () => {}
})

export const GoalInventoryContext = createContext<GoalsInventoryContextType>({
    itemList: [],
    updateList: () => {}
})

export default function InventoryContextProvider({ children } : Children) {

    const [shopInventory, setShopInventory] = useState<ShopItem[]>([]);
    const updateShopInventory : UpdateInventory = (item, action) => {
        modifyInventory({list: shopInventory, item, setList: setShopInventory, action})
    }

    const [goalsInventory, setGoalsInventory] = useState<GoalItem[]>([])
    const updateGoalsInventory : UpdateInventory = (item, action) => {
        modifyInventory({list: goalsInventory, item, setList: setGoalsInventory, action})
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