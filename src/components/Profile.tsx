import Page from './Page'
import Card from './Card'
import { Stat } from '../models/profile.models'
import { nanoid } from 'nanoid'
import '../styles/profile.css'
import CustomLink from './CustomLink'
import { useContext, useEffect } from 'react'
import { BalanceContext } from '../context/StatsContext'

function Profile() {

  const { balance, updateBalance } = useContext(BalanceContext)

  const stats : Stat[] = [
    {
      name: 'balance',
      value: balance,
      color: 'green'
    },
    {
      name: 'earned today',
      value: 800,
      color: 'green'
    },
    {
      name: 'spent today',
      value: 400,
      color: 'red'
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
            {stats.map(({name, value, color, items}) => 
              <div className="stat" key={nanoid()}>
                <h3>{name}:</h3>
                <p style={{color: color}}>{ typeof value === 'number' 
                  ? value 
                  : items?.map(item => item) }</p>
              </div>
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