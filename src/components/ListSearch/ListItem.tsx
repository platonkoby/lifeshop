import React, { useEffect, useState } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { ListItemProps } from '../../models/list.search.models'
import '../../styles/list-item.css'

function ListItem({ updateLists, item } : ListItemProps) {


  return (
    <div className='list-item'>
      <div className="count-cirle" style={{visibility: item.amount > 0 ? 'visible' : 'hidden'}}>
        <div className="count">
          {item.amount}
        </div>
      </div>
      <button className="item-body" onClick={() => updateLists({...item}, 'increment')}>
        <div className="item-name">{item.name}</div>
        <div className="sum">{item.type === 'goal item' ? '+' : '-'}{item.value}</div>
      </button>
    </div>
  )
}

export default ListItem