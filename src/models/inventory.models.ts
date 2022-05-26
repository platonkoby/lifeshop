import { GoalsContextType, ModifyListAction, ShopContextType, UpdateListProps } from "./cart.models";
import { Item } from "./items.models";

export interface ShopInventoryContextType extends Omit<ShopContextType, 'updateList'> {
    updateList: UpdateInventoryList;
}

export interface GoalsInventoryContextType extends Omit<GoalsContextType, 'updateList'> {
    updateList: UpdateInventoryList;
}

export interface ModifyInventoryProps extends Omit<UpdateListProps, 'action'> {
    action: ModifyListAction | 'change' | 'delete';
}

export type UpdateInventoryList = (item: Item, action: ModifyListAction | 'change' | 'delete') => void;