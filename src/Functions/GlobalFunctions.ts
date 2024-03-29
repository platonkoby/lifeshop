import { Item } from "../models/items.models"

export const add = (n1: number, n2: number) => n1 + n2

export const getButtonSize = () => 30

export const getSmallButtonSize = () => 25

export const isValidKey = (key : string, item : Item) : key is keyof typeof item => {
    return key in item
}

export const listAdd = <T>(list : T[], item : T) => [...list, item]


export const listFilter = <T>(list: T[], item : T, filter : keyof T) => (
    list.filter((lItem) => lItem[filter] !== item[filter])
)

export const getColor = (value : number | undefined, negative : boolean) => {
    if (typeof value === "undefined") return 'black'

    if ( value >= 0 && !negative) return 'green'

    if ( value > 0 && negative) return 'red'

    if ( value < 0 && !negative ) return 'red'

    return 'green'
}

export const returnNumberIfNumber = (value : any) => {
    return typeof value === 'number'
    ? value
    : undefined
}

export function stringArraysAreSame(old : string[], fresh : string[]) {
    return fresh.every((freshItem) => old.some((oldItem) => oldItem === freshItem))
}