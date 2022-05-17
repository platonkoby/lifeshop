import { Children } from './global.models'

export interface ListSearchProps extends SearchBarProps, DisplayListProps {}

export interface DisplayListProps {
    list: string[];
}


export interface SearchBarProps  {
    placeholder: string;
    width?: string;
}

export interface SortingProps {
    changeSortingTo: (sorting : SortingType) => void;
}

export type SortingType = 'most popular' | 'alphabetical';