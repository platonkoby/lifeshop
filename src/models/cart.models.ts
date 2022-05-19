import { SetStateAction } from "react";
import { GoalItem, Item, ShopItem } from "./items.models";

export interface ShopContextType {
    itemList: ShopItem[];
    updateList: (item: ShopItem, action: EditListAction) => void
}

export interface GoalsContextType {
    itemList: GoalItem[];
    updateList: (item: GoalItem, action: EditListAction) => void
}

interface CartFuncProps {
    goalItems: GoalItem[];
    shopItems: ShopItem[];
}

export interface CalculateSumProps extends CartFuncProps {}

export interface CalculateBalance extends CartFuncProps {
    balance: number;
}

export interface EditListProps {
    list: Item[];
    item: Item;
    setList: (callback : SetStateAction<GoalItem[]>) => void
}

export interface UpdateListProps extends EditListProps {
    action: EditListAction
}

export type EditListAction = 'add' | 'remove';