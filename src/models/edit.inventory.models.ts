import StringDetail from "../components/Edit/Detail";
import { Item } from "./items.models";
import { UpdateInventory } from "./inventory.models";

export interface EditInventoryProps {
    updateList: UpdateInventory;
    itemList: Item[];
    page: string;
}

export interface EditListProps {
    list: Item[];
    showCreateItem: boolean;
    updateList: UpdateInventory;   
}

export interface EditItemProps {
    item: Item;
    updateList: UpdateInventory;
}

export type StringDetailProps =
    | { itemKey: string, value: string, valueType: 'string', updateItem: UpdateItemDetail }
    | { itemKey: string, value: number, valueType: 'number', updateItem: UpdateItemDetail }
    | { itemKey: string, value: string[], valueType: 'array', updateItem: UpdateItemDetail }

export type UpdateItemDetail = (key: string, value: string | number | string[]) => void;

export interface MultiSelectionOptions {
    label: string;
    value: string;
}


