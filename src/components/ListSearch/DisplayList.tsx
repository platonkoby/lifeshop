import React from 'react'
import { DisplayListProps } from '../../models/list_search.models'
import ListItem from './ListItem'
import '../../styles/display-list.css'

function DisplayList({ list } : DisplayListProps) {
  return (
    <div className='display-list'>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
    
  )
}

export default DisplayList