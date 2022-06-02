import React, { useContext } from 'react'
import { GoalsContext, ShopContext } from '../context/CartContext'
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

function Checkout() {

    const { balance } = useContext(BalanceContext)

    const { itemList: shopList, updateList: updateShopList } = useContext(ShopContext)

    const { itemList: goalList, updateList: updateGoalList } = useContext(GoalsContext)

  return (
    <Page page='checkout'>
        <section className="quick-stats">
          <Stat name="Goals" value={1000} color='green' />
          <Stat name="Shop" value={500} color='red' />
          <Stat name="Today" value={200} color='green' />
          <Stat name="Balance" value={balance} />
        </section>
        <Divider />
        <Bill />
        <section className="checkout-buttons">
          <button className="checkout-pay">Complete</button>
        </section>
    </Page>
  )
}

export default Checkout