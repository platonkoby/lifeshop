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
import { UpdateLists } from '../models/list.search.models'
import { favourites } from '../Functions/Sortings'

function Shop() {

  const { itemList, updateList: updateInventory } = useContext(ShopInventoryContext)
  const { itemList: items, updateList: updateCart } = useContext(ShopContext)

  const updateLists : UpdateLists = (item, action) => {
    updateInventory(item, action)
    updateCart(item, action)
  }

  return (
    <Page page='shop'>
      <div className="shop">
        {favourites(itemList).length > 0 &&
        <>
          <Card header='Your favourites'>
            <DisplayList updateLists={updateLists} list={favourites(itemList)} />
          </Card>
          <Divider />
        </>
        }
        <Card header='Most frequent'>
          <DisplayList updateLists={updateLists} list={itemList} />
        </Card>
        <Divider />
        <ListSearch updateLists={updateLists} placeholder='Input product name' list={itemList} />
      </div>
    </Page>
  )
}

export default Shop
