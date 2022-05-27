import { Item, ListActionType, ShopItem } from './items.models';


export interface ListSearchProps extends SearchBarProps, DisplayListProps {}

export interface DisplayListProps {
    list: Item[];
    updateLists: UpdateLists
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
    item: Item;
    updateLists: UpdateLists
}

export type UpdateLists = (item : Item, action: ListActionType ) => void;