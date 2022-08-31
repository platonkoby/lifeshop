import Page from './Page'
import Card from './Card'
import { StatType } from '../models/profile.models'
import { nanoid } from 'nanoid'
import '../styles/profile.css'
import CustomLink from './CustomLink'
import { useContext, useEffect, useState } from 'react'
import { BalanceContext } from '../context/StatsContext'
import Stat from './Stat'
import { getDailyStats } from '../Functions/DailyStatsLogick'
import { DailyStat } from '../models/stats.models'
import { createDummyData, confirmLocalDataExists } from '../Functions/DbFuncs'

function Profile() {

  const { balance, updateBalance } = useContext(BalanceContext)

  const [dailyStats, setDailyStats] = useState<DailyStat[]>([])


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

  useEffect(() => {
    setDailyStats(getDailyStats())
  }, [])

  return (
    <Page page='profile'>
      <div className="profile">
        <Card header='Username'>
          <div className="stats">
            {dailyStats.map(({name, value, id}) => 
              <Stat name={name} value={value} key={nanoid()} />
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