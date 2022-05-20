import Card from './Card'
import Page from './Page'
import '../styles/shop.css'
import ListSearch from './ListSearch/ListSearch'
import DisplayList from './ListSearch/DisplayList'
import Divider from './Divider'
import { useContext, useEffect } from 'react'
import { ShopContext } from '../context/CartContext'
import { ShopInventoryContext } from '../context/InventoryContext'
import { ShopItem } from '../models/items.models'
import { EditListAction } from '../models/cart.models'

function Shop() {

  const { itemList, updateList: updateInventory } = useContext(ShopInventoryContext)
  const { itemList: items, updateList: updateCart } = useContext(ShopContext)

  const updateList = (item : ShopItem, action : EditListAction) => {
    updateInventory(item, action)
    updateCart(item, action)
  }

  useEffect(() => {
    console.log(items)
    console.log(itemList)
  }, [items, itemList])

  return (
    <Page page='shop'>
      <div className="shop">
        <Card header='Your favourites'>
          <DisplayList updateList={updateList} list={itemList} />
        </Card>
        <Divider />
        <Card header='Most frequent'>
          <DisplayList updateList={updateList} list={itemList} />
        </Card>
        <Divider />
        <ListSearch updateList={() => {}} placeholder='Input product name' list={itemList} />
      </div>
    </Page>
  )
}

export default Shop

//TODO: make sure amount increases for that pass itemInCart with inventoryItem
//TODO: finish functionality of Cart and Invetory items