import Card from './Card'
import Page from './Page'
import '../styles/shop.css'
import ListSearch from './ListSearch/ListSearch'
import DisplayList from './ListSearch/DisplayList'
import Divider from './Divider'
import { useContext, useEffect } from 'react'
import { ShopContext } from '../context/CartContext'

function Shop() {

  const { itemList, updateList } = useContext(ShopContext)

  useEffect(() => console.log(itemList), [itemList])

  return (
    <Page page='shop'>
      <div className="shop">
        <Card header='Your favourites'>
          <DisplayList updateList={() => updateList({name: 'soem', value: 1, type: 'goal item', amount: 1}, 'add')} list={[]} />
        </Card>
        <Divider />
        <Card header='Most frequent'>
          <DisplayList updateList={() => updateList({name: 'soem', value: 1, type: 'goal item', amount: 1}, 'remove')} list={[]} />
        </Card>
        <Divider />
        <ListSearch updateList={() => {}} placeholder='Input product name' list={['one', 'two', 'three']} />
      </div>
    </Page>
  )
}

export default Shop