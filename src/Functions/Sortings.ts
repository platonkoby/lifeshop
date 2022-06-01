import { Item } from "../models/items.models";
import { SortingType } from "../models/list.search.models";

const alphabeticalSorting = (list : Item[]) => (
    [...list].sort((a, b) => a.name > b.name ? 1 : -1)
)

const highestValueSorting = (list : Item[]) => (
    [...list].sort((a, b) => a.value < b.value ? 1 : -1)
)

const lowestValueSorting = (list : Item[]) => (
    [...list].sort((a, b) => a.value > b.value ? 1 : -1)
)

const favouritesFirst = (list : Item[]) => (
    [...list].sort((a, b) => !a.favourite ? 1 : -1)
)

const frequencySorting = (list : Item[]) => (
    [...list].sort((a, b) => 1)
)

export const sortList = (list : Item[], sorting: SortingType) => {
    switch (sorting) {
        case 'a-z':
            return alphabeticalSorting(list)
        case 'highest value':
            return highestValueSorting(list)
        case 'lowest value':
            return lowestValueSorting(list)
        case 'favourites first':
            return favouritesFirst(list)
        case 'oftenly used':
            return [...list]
    }
}

export const favourites = (list : Item[]) => list.filter((item) => item.favourite)