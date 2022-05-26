import React, { useContext } from 'react'
import { ShopInventoryContext } from '../context/InventoryContext'
import EditInventory from './Edit/EditInventory'

function EditShopInventory() {

  const { itemList, updateList } = useContext(ShopInventoryContext)

  return (
    <EditInventory updateList={updateList} itemList={itemList} page={'Shop'} />
  )
}

export default EditShopInventory