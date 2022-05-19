import React from 'react'
import { DisplayListProps } from '../../models/list_search.models'
import ListItem from './ListItem'
import '../../styles/display-list.css'

function DisplayList({ list, updateList } : DisplayListProps) {
  return (
    <div className='display-list'>
      <ListItem updateList={updateList} />
    </div>
    
  )
}

export default DisplayList