import React, { useContext } from 'react'
import { ShopContext } from '../context/CartContext'
import { ShopInventoryContext } from '../context/InventoryContext'
import { Item, ListActionType } from '../models/items.models'
import EditInventory from './Edit/EditInventory'

function EditShopInventory() {

  const { itemList, updateList : inventoryShopListUpgrade } = useContext(ShopInventoryContext)
  const { updateList : cartShopListUpdate } = useContext(ShopContext)

  const updateLists = (item : Item, action : ListActionType) => {
    inventoryShopListUpgrade(item, action);
    cartShopListUpdate(item, action);
  }

  return (
    <EditInventory updateLists={updateLists} itemList={itemList} page={'Shop'} />
  )
}

export default EditShopInventory