import StringDetail from "../components/Edit/Detail";
import { Item } from "./items.models";
import { ModifyListAction } from './cart.models'
import { UpdateInventoryList } from "./inventory.models";

export interface EditInventoryProps {
    updateList: UpdateInventoryList;
    itemList: Item[];
    page: string;
}

export interface EditListProps {
    list: Item[];
    showCreateItem: boolean;
    updateList: UpdateInventoryList;   
}

export interface EditItemProps {
    item: Item;
    updateList: UpdateInventoryList;
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


