import { createContext, useContext, useEffect, useState } from "react";
import { goalItemsInCartRequest, shopItemsInCartRequest } from "../firebase/firestore";
import { Cart, modifyCart} from "../Functions/CartLogick";
import { retrieveData } from "../Functions/DbFuncs";
import { GoalsContextType, ShopContextType, CartContextType, UpdateCart } from "../models/cart.models";
import { Children } from "../models/global.models";
import { GoalItem, ShopItem } from "../models/items.models";
import { BalanceContext } from "./StatsContext";

export const ShopContext = createContext<ShopContextType>({
    itemList: [],
    updateList: () => {}
});

export const GoalsContext = createContext<GoalsContextType>({
    itemList: [],
    updateList: () => {}
});

export const CartContext = createContext<CartContextType>({
    cartBalance: 0
})

export default function CartContextProvider({ children } : Children) {

    const {updateBalance} = useContext(BalanceContext)
    
    const [shopList, setShopList] = useState<ShopItem[]>([])
    const updateShopList : UpdateCart = (item, action) => {
        modifyCart({list: shopList, item, setList: setShopList, action})
    }

    const [goalList, setGoalList] = useState<GoalItem[]>([])
    const updateGoalList : UpdateCart = (item, action) => {
        modifyCart({list: goalList, item, setList: setGoalList, action})
    }

    const [cartBalance, setCartBalance] = useState(0)

    // calculate cart balance
    useEffect(() => {
        setCartBalance(Cart.CalculateSum({goalItems: goalList, shopItems: shopList}))
    }, [shopList, goalList])

    // retrieve lists from database
    useEffect(() => {
        retrieveData(shopItemsInCartRequest, setShopList)
    },[])

    useEffect(() => {
        retrieveData(goalItemsInCartRequest, setGoalList)
    }, [])

    return (
        <ShopContext.Provider value={{itemList: shopList, updateList: updateShopList}}>
            <GoalsContext.Provider value={{itemList: goalList, updateList: updateGoalList}}>
                <CartContext.Provider value={{cartBalance: cartBalance}}>
                    {children}
                </CartContext.Provider>
            </GoalsContext.Provider>
        </ShopContext.Provider>
    )        
}

