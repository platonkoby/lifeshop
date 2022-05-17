import Page from './Page'
import '../styles/goals.css'
import Card from './Card'
import DisplayList from './ListSearch/DisplayList'
import ListSearch from './ListSearch/ListSearch'
import Divider from './Divider'

function Goals() {
  return (
    <Page>
        <div className="goals">
          <Card header='Your favourites'>
            <DisplayList list={[]} />
          </Card>
          <Divider />
          <Card header='Most frequent'>
            <DisplayList list={[]} />
          </Card>
          <Divider />
          <ListSearch placeholder='Search goals' list={[]} />
        </div>
    </Page>
  )
}

export default Goals