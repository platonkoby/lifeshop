export interface Item {
    name: string;
    value: number;
    amount: number;
    type: ItemType;
}
export interface GoalItem extends Item {
    
}
export interface ShopItem extends Item {
    
}

type ItemType = 'goal item' | 'shop item'