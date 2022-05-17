import Card from './Card'
import Page from './Page'
import '../styles/shop.css'
import ListSearch from './ListSearch/ListSearch'
import DisplayList from './ListSearch/DisplayList'
import Divider from './Divider'

function Shop() {
  return (
    <Page>
      <div className="shop">
        <Card header='Your favourites'>
          <DisplayList list={[]} />
        </Card>
        <Divider />
        <Card header='Most frequent'>
          <DisplayList list={[]} />
        </Card>
        <Divider />
        <ListSearch placeholder='Input product name' list={['one', 'two', 'three']} />
      </div>
    </Page>
  )
}

export default Shop