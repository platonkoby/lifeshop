import { GoalsContextType, ShopContextType } from "./cart.models";
import { Item, ListActionType } from "./items.models";

export interface ShopInventoryContextType extends Omit<ShopContextType, 'updateList'> {
    updateList: UpdateInventory;
    clearShopInventory: () => void;
}

export interface GoalsInventoryContextType extends Omit<GoalsContextType, 'updateList'> {
    updateList: UpdateInventory;
    clearGoalInventory: () => void;
}

export type ListAction = (list : Item[], item : Item) => Item[]

export type UpdateInventory = (item : Item, action : ListActionType) => void
