import { GoalItem, ShopItem } from "./items.models";

export interface ShopContextType {
    itemList: ShopItem[];
    updateList: () => []
}

export interface GoalsContextType {
    itemList: GoalItem[];
    updateList: () => []
}

interface CartFuncProps {
    goalItems: GoalItem[];
    shopItems: ShopItem[];
}

export interface CalculateSumProps extends CartFuncProps {}

export interface CalculateBalance extends CartFuncProps {
    balance: number;
}
