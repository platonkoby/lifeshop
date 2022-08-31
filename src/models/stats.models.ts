export type DailyStat = 
| { name: string, value: number, default: number, id: string, type: 'numeric' }
| { name: string, value: string[], default: string[], id: string, type: 'iterable' }
| { name: string, value: string, default: string, id: string, type: 'string' }

// export type DailyStats = { 
//     shopItems: DailyStat,
//     goalItems: DailyStat
//  }

export interface LocalData {
    GOAL_ITEMS: {
        key: 'goal items',
        value: DailyStat,
        hasDefault: true,
    };
    SHOP_ITEMS: {
        key: 'shop items',
        value: DailyStat,
        hasDefault: true,
    };
    TODAY: {
        key: 'today',
        value: string,
        updateTime: string,
        hasDefault: false,
    };
}