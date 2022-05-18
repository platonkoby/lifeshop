export interface Item {
    name: string;
    value: number;
}

export interface ShopItem extends Item {
    type: 'shop item';
}

export interface GoalItem extends Item {
    type: 'goal item';
}