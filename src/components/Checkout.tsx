import React, { useContext } from 'react'
import { CartContext, GoalsContext, ShopContext } from '../context/CartContext'
import { BalanceContext } from '../context/StatsContext'
import Page from './Page'
import '../styles/checkout.css'
import Card from './Card'
import Stat from './Stat'
import Divider from './Divider'
import BillItem from './Bill/BillItem'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import { getButtonSize } from '../Functions/GlobalFunctions'
import { BiDownArrow } from 'react-icons/bi'
import Bill from './Bill/Bill'
import { addValuesInList } from '../Functions/CartLogick'
import { GoalInventoryContext, ShopInventoryContext } from '../context/InventoryContext'

function Checkout() {

    const { cartBalance, clearCart } = useContext(CartContext)

    const { balance, updateBalance } = useContext(BalanceContext)

    const { clearGoalInventory } = useContext(GoalInventoryContext)

    const { clearShopInventory } = useContext(ShopInventoryContext)

    const { itemList: shopList, updateList: updateShopList } = useContext(ShopContext)

    const { itemList: goalList, updateList: updateGoalList } = useContext(GoalsContext)

    const checkout = () => {
      updateBalance(cartBalance)
      clearCart()
      clearShopInventory()
      clearGoalInventory()
    }

    const checkoutGuard = () => {
      if (shopList.length === 0 && goalList.length === 0) return true
      return false
    }

  return (
    <Page page='checkout'>
        <section className="quick-stats">
          <Stat name="Goals" value={addValuesInList(goalList)} />
          <Stat name="Shop" value={addValuesInList(shopList)} negative />
          <Stat name="Today" value={200} />
          <Stat name="Balance" value={balance} />
        </section>
        <Divider />
        <Bill balance={balance} shopList={shopList} goalList={goalList} />
        <section className="checkout-buttons">
          <button disabled={checkoutGuard()} onClick={checkout} className="checkout-pay">Complete</button>
        </section>
    </Page>
  )
}

export default Checkout