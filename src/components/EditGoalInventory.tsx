import React, { useContext, useEffect } from 'react'
import { CartContext, GoalsContext } from '../context/CartContext'
import { GoalInventoryContext } from '../context/InventoryContext'
import { Item, ListActionType } from '../models/items.models'
import EditInventory from './Edit/EditInventory'

function EditGoalInventory() {

  const { itemList, updateList } = useContext(GoalInventoryContext)
  const { updateList: updateGoals } = useContext(GoalsContext)

  const updateLists = (item : Item, action : ListActionType) => {
    updateList(item, action);
    updateGoals(item, action)
  }

  return (
    <EditInventory updateLists={updateLists} itemList={itemList} page={'Goals'} />
  )
}

export default EditGoalInventory