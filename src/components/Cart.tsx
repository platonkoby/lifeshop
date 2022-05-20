import React, { useContext } from 'react'
import { GoalsContext, ShopContext } from '../context/CartContext'

function Cart() {

    const { itemList: shopList, updateList: updateShopList } = useContext(ShopContext)

    const { itemList: goalItemList, updateList: updateGoalList } = useContext(GoalsContext)

    console.log(shopList)

  return (
    <div>Cart</div>
  )
}

export default Cart