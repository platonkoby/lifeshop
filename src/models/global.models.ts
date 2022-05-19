import React from "react";
import { GoalItem, ShopItem } from "./items.models";

export interface Children {
    children: React.ReactNode
}

export type UpdateList = (item: ShopItem | GoalItem) => void