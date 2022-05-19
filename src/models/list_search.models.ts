import { Children, UpdateList } from './global.models'
import { GoalItem, ShopItem } from './items.models';

export interface ListSearchProps extends SearchBarProps, DisplayListProps {}

export interface DisplayListProps {
    list: string[];
    updateList: UpdateList
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
    updateList: UpdateList
}