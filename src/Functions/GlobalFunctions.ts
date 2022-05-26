import { Item } from "../models/items.models"

export const add = (n1: number, n2: number) => n1 + n2

export const getButtonSize = () => 30

export const getSmallButtonSize = () => 25


export const isValidKey = (key : string, item : Item) : key is keyof typeof item => {
    return key in item
}
