import Page from './Page'
import '../styles/goals.css'
import Card from './Card'
import DisplayList from './ListSearch/DisplayList'
import ListSearch from './ListSearch/ListSearch'
import Divider from './Divider'
import { useContext, useEffect } from 'react'
import { GoalsContext } from '../context/CartContext'

function Goals() {

  const { itemList, updateList } = useContext(GoalsContext)

  useEffect(() => {
    console.log(itemList)
  } ,[itemList])

  return (
    <Page page='goals'>
        <div className="goals">
          <Card header='Your favourites'>
            <DisplayList updateList={() => updateList({name: 'soem', value: 1, type: 'goal item', amount: 1}, 'add')} list={[]} />
          </Card>
          <Divider />
          <Card header='Most frequent'>
            <DisplayList updateList={() => updateList({name: 'soem', value: 1, type: 'goal item', amount: 1}, 'remove')} list={[]} />
          </Card>
          <Divider />
          <ListSearch updateList={() => {}} placeholder='Search goals' list={[]} />
        </div>
    </Page>
  )
}

export default Goals