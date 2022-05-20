import { ModifyListAction } from './cart.models';
import { UpdateList } from './global.models';
import { Item, ShopItem } from './items.models';


export interface ListSearchProps extends SearchBarProps, DisplayListProps {}

export interface DisplayListProps {
    list: Item[];
    updateList: (item : ShopItem, action : ModifyListAction) => void;
}


export interface SearchBarProps  {
    placeholder: string;
    width?: string;
}

export interface SortingProps {
    changeSortingTo: (sorting : SortingType) => void;
}

export type SortingType = 'most popular' | 'alphabetical';

export interface ListItemProps {
    updateList: (item : ShopItem, action : ModifyListAction) => void;
    item: Item
}