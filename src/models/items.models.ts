export interface Item {
    name: string;
    value: number;
    amount: number;
    type: 'goal item' | 'shop item';
}

export interface ShopItem extends Item {

}

export interface GoalItem extends Item {
    
}