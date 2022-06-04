import Page from './Page'
import Card from './Card'
import { StatType } from '../models/profile.models'
import { nanoid } from 'nanoid'
import '../styles/profile.css'
import CustomLink from './CustomLink'
import { useContext, useEffect } from 'react'
import { BalanceContext } from '../context/StatsContext'
import Stat from './Stat'

function Profile() {

  const { balance, updateBalance } = useContext(BalanceContext)

  const stats : StatType[] = [
    {
      name: 'balance',
      value: balance,
    },
    {
      name: 'earned today',
      value: 800,
    },
    {
      name: 'spent today',
      value: 400,
      negative: true
    },
    {
      name: 'goals today',
      items: ['work 4 hours', 'test']
    },
    {
      name: 'today\'s purchases',
      items: ['play 2 hours']
    }
  ]

  return (
    <Page page='profile'>
      <div className="profile">
        <Card header='Username'>
          <div className="stats">
            {stats.map(({name, value, negative, items}) => 
              <Stat name={name} value={value} items={items} key={nanoid()} />
            )}
          </div>
        </Card>
        <Card header=''>
          <div className="links">
            <CustomLink to='/stats'>Stats</CustomLink>
            <CustomLink to='/edit-shop-inventory'>Manage Shop</CustomLink>
            <CustomLink to='/edit-goal-inventory'>Manage Goals</CustomLink>
            <CustomLink to='/account-setting'>Account Settings</CustomLink>
          </div>
        </Card>
      </div>
    </Page>
  )
}

export default Profile