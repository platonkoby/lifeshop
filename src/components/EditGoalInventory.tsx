import React, { useContext } from 'react'
import { GoalInventoryContext } from '../context/InventoryContext'
import EditInventory from './Edit/EditInventory'

function EditGoalInventory() {

  const { itemList, updateList } = useContext(GoalInventoryContext)

  return (
    <EditInventory updateList={updateList} itemList={itemList} page={'Goals'} />
  )
}

export default EditGoalInventory