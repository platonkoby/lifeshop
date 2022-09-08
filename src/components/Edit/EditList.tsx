import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { EditListProps } from '../../models/edit.inventory.models'
import { Item } from '../../models/items.models'
import '../../styles/edit-list.css'
import Divider from '../Divider'
import EditItem from './EditItem'
import EditItemDetails from './EditItemDetails'

function EditList({ list, showCreateItem, updateList } : EditListProps) {

  const newItem: Item = { name: '', amount: 0, value: 0, type: getItemType(list), categories: [], id: nanoid() }

  function getItemType (list: Item[]) {
    return list.some(item => item.type === 'shop item')
    ? 'shop item'
    : 'goal item'
  }
  

  return (
    <div className='edit-list'>
      {showCreateItem 
      && <div className="create-item">
          <EditItemDetails updateList={updateList} item={newItem} />
          <Divider />
        </div>}
      {list.map((item) => (
        <div key={nanoid()}>
          <EditItem updateList={updateList} item={item} />
          <Divider />
        </div>
      ))}
    </div>
  )
}

export default EditList