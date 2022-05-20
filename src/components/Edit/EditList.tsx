import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { EditListProps } from '../../models/edit.inventory.models'
import '../../styles/edit-list.css'
import Divider from '../Divider'
import EditItem from './EditItem'
import EditItemDetails from './EditItemDetails'

function EditList({ list, showCreateItem } : EditListProps) {



  return (
    <div className='edit-list'>
      {showCreateItem 
      && <div className="create-item">
          <EditItemDetails />
          <Divider />
        </div>}
      {list.map((item) => (
        <div key={nanoid()}>
          <EditItem item={item} />
          <Divider />
        </div>
      ))}
    </div>
  )
}

export default EditList