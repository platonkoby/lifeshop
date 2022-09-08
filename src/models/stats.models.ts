export type DailyStat = 
| { name: string, value: number, default: number, id: string, type: 'numeric' }
| { name: string, value: string[], default: string[], id: string, type: 'iterable' }
| { name: string, value: string, default: string, id: string, type: 'string' }

// export type DailyStats = { 
//     shopItems: DailyStat,
//     goalItems: DailyStat
//  }

export interface LocalData {
    GOAL_ITEMS: GoalItems
    SHOP_ITEMS: ShopItems
    TODAY: Today
}

export interface GoalItems {
    key: 'daily stats - goal items',
    value: DailyStat,
    hasDefault: true,
}

export interface ShopItems {
    key: 'daily stats - shop items',
    value: DailyStat,
    hasDefault: true,
}

export interface Today {
    key: 'today',
    value: string,
    updateTime: string,
    hasDefault: false,
}