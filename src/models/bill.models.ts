import { Item } from "./items.models";

export interface BillItemProps {
    bold?: boolean;
    name: string;
    value: number;
    amount?: number;
}

export interface BillListProps {
    listName: string;
    items?: Item[];
}