import { Item } from "./items.models";

export interface BillItemProps {
    bold?: boolean;
    name: string;
    value: number;
    amount?: number;
    negative?: boolean;
}

export interface BillListProps {
    listName: string;
    items: Item[];
    negative?: boolean;
}

export interface BillProps {
    balance: number;
    goalList: Item[];
    shopList: Item[];
}