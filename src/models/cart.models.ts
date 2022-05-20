import { SetStateAction } from "react";
import { GoalItem, Item, ShopItem } from "./items.models";

export interface ShopContextType {
    itemList: ShopItem[];
    updateList: (item: ShopItem, action: ModifyListAction) => void
}

export interface GoalsContextType {
    itemList: GoalItem[];
    updateList: (item: GoalItem, action: ModifyListAction) => void
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

export interface ModifyListProps {
    list: Item[];
    item: Item;
    setList: (callback : SetStateAction<GoalItem[]>) => void
}

export interface UpdateListProps extends ModifyListProps {
    action: ModifyListAction
}

export type UpdateList = ({list, item, setList, action} : UpdateListProps) => void

export type ModifyListAction = 'add' | 'remove';