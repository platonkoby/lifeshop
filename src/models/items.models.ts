export interface Item {
    name: string;
    value: number;
    amount: number;
    type: ItemType;
    categories: string[];
    favourite?: boolean;
}
export interface GoalItem extends Item {
    
}
export interface ShopItem extends Item {
    
}

type ItemType = 'goal item' | 'shop item'