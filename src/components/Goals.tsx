import Page from './Page'
import '../styles/goals.css'
import Card from './Card'
import DisplayList from './ListSearch/DisplayList'
import ListSearch from './ListSearch/ListSearch'
import Divider from './Divider'
import { useContext, useEffect } from 'react'
import { GoalsContext } from '../context/CartContext'
import { GoalInventoryContext } from '../context/InventoryContext'
import { GoalItem, Item } from '../models/items.models'
import { UpdateLists } from '../models/list.search.models'
import { favourites } from '../Functions/Sortings'

function Goals() {

  const { itemList: inventoryItems, updateList: updateInventory } = useContext(GoalInventoryContext)
  const { itemList: cartItems, updateList: updateCart } = useContext(GoalsContext)

  const updateLists : UpdateLists = (item, action) => {
    updateInventory(item, action)
    updateCart(item, action)
  }

  // useEffect(() => {
  //   console.log('cartItems')
  // }, [cartItems])
  // useEffect(() => {
  //   console.log(inventoryItems)
  // }, [inventoryItems])

  return (
    <Page page='goals'>
        <div className="goals">
          {favourites(inventoryItems).length > 0 &&
          <>
            <Card header='Your favourites'>
              <DisplayList updateLists={updateLists} list={favourites(inventoryItems)} />
            </Card>
            <Divider />
          </>
          }
          <Card header='Most frequent'>
            <DisplayList updateLists={updateLists} list={inventoryItems} />
          </Card>
          <Divider />
          <ListSearch updateLists={updateLists} placeholder='Search goals' list={inventoryItems} />
        </div>
    </Page>
  )
}

export default Goals