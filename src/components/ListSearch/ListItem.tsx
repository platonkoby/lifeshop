import React, { useState } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { ListItemProps } from '../../models/list_search.models'
import '../../styles/list-item.css'

function ListItem({ updateList } : ListItemProps) {

  return (
    <div className='list-item'>
      <div className="count-cirle">
        <div className="count">
          4
        </div>
      </div>
      <button className="item-body" onClick={() => updateList({name: 'work', value: 100, type: 'shop item', amount: 1})}>
        <div className="item-name">work for 1 hour</div>
        <div className="sum">+200</div>
      </button>
    </div>
  )
}

export default ListItem