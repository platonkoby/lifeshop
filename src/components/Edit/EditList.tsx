import { nanoid } from 'nanoid'
import React from 'react'
import { EditListProps } from '../../models/edit.inventory.models'
import '../../styles/edit-list.css'
import Divider from '../Divider'
import EditItem from './EditItem'

function EditList({ list } : EditListProps) {
  return (
    <div className='edit-list'>
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