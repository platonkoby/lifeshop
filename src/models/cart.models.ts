import { SetStateAction } from "react";
import { GoalItem, Item, ListActionType, ShopItem } from "./items.models";

export interface ShopContextType {
    itemList: ShopItem[];
    updateList: (item: ShopItem, action: ListActionType) => void
}

export interface GoalsContextType {
    itemList: GoalItem[];
    updateList: (item: GoalItem, action: ListActionType) => void
}

export interface CartContextType {
    cartBalance: number;
}

interface CartFuncProps {
    goalItems: GoalItem[];
    shopItems: ShopItem[];
}

export interface CalculateSumProps extends CartFuncProps {}

export interface CalculateBalance extends CartFuncProps {
    balance: number;
}

export type UpdateCart = (item : Item, action : ListActionType) => void
