import Page from './Page'
import '../styles/goals.css'
import Card from './Card'
import DisplayList from './ListSearch/DisplayList'
import ListSearch from './ListSearch/ListSearch'
import Divider from './Divider'
import { useContext, useEffect } from 'react'
import { GoalsContext } from '../context/CartContext'
import { GoalInventoryContext } from '../context/InventoryContext'
import { GoalItem } from '../models/items.models'
import { EditListAction } from '../models/cart.models'

function Goals() {

  const { itemList: inventoryItems, updateList: updateInventory } = useContext(GoalInventoryContext)
  const { itemList: cartItems, updateList: updateCart } = useContext(GoalsContext)

  const updateList = (item: GoalItem, action : EditListAction) => {
    updateInventory(item, action)
    updateCart(item, action)
  }

  useEffect(() => {
    console.log(cartItems)
    console.log(inventoryItems)
  } ,[inventoryItems, cartItems])

  return (
    <Page page='goals'>
        <div className="goals">
          <Card header='Your favourites'>
            <DisplayList updateList={updateList} list={inventoryItems} />
          </Card>
          <Divider />
          <Card header='Most frequent'>
            <DisplayList updateList={updateList} list={inventoryItems} />
          </Card>
          <Divider />
          <ListSearch updateList={() => {}} placeholder='Search goals' list={[]} />
        </div>
    </Page>
  )
}

export default Goals