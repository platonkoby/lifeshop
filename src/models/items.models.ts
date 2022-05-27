import { SetStateAction } from "react";

export interface Item {
    name: string;
    value: number;
    amount: number;
    type: ItemType;
    categories: string[];
    favourite?: boolean;
}
export interface GoalItem extends Item {
    
}
export interface ShopItem extends Item {
    
}

type ItemType = 'goal item' | 'shop item'

export type ListActionType = 'update' | 'delete' | 'increment' | 'decrement';

export interface ModifyListProps {
    list: Item[];
    item: Item;
    setList: (callback : SetStateAction<GoalItem[]>) => void;
    action: ListActionType
}

export type ModifyList = (props: ModifyListProps) => void