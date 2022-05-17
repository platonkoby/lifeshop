import React, { useState } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import '../../styles/list-item.css'

function ListItem() {

  return (
    <div className='list-item'>
      <div className="count-cirle">
        <div className="count">
          4
        </div>
      </div>
      <div className="item-body">
        <div className="item-name">work for 1 hour</div>
        <div className="sum">+200</div>
      </div>
    </div>
  )
}

export default ListItem