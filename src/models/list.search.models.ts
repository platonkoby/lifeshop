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
    sorting: SortingType;
}


export interface ListItemProps {
    item: Item;
    updateLists: UpdateLists
}

export type UpdateLists = (item : Item, action: ListActionType ) => void;

export type SortingType = 'oftenly used' | 'a-z' | 'highest value' | 'lowest value' | 'favourites first';
