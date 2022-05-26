import { nanoid } from 'nanoid'
import React, { SyntheticEvent, useContext, useEffect, useState } from 'react'
import { isValidKey } from '../../Functions/GlobalFunctions'
import { EditItemProps, UpdateItemDetail } from '../../models/edit.inventory.models'
import '../../styles/edit-item.css'
import Detail from './Detail'

function EditItemDetails({ item, updateList } : EditItemProps) {

    let currentItem = {...item}

    const updateCurrentItem : UpdateItemDetail = (key, value ) => {
        if(!isValidKey(key, item)) throw Error('Something happened with item detail!')        

        currentItem = {...currentItem, [key]: value}
    }
    const updateItem = () => {
        if (currentItem.name === '') return
        updateList(currentItem, 'change')
    }

  return (
    <div className="item-details-section">    
        <div className='item-details'>
            {Object.keys(item).map(key => {
                if (!isValidKey(key, item)) throw Error()
                if (key === 'type') return

                const value = currentItem[key];

                return (
                <div className="item-detail" key={nanoid()}>
                    <p className="detail-name">{key}:</p>
                    { typeof value === 'number' &&
                        <Detail valueType='number' itemKey={key} value={value} updateItem={updateCurrentItem} /> }
                    { typeof value === 'string' &&
                        <Detail valueType='string' itemKey={key} value={value} updateItem={updateCurrentItem} /> }
                    { Array.isArray(value) && 
                        <Detail valueType='array' itemKey={key} value={value} updateItem={updateCurrentItem} /> }
                </div>
                )
            })}
        </div>
        <button onClick={updateItem} className='save-details-btn'>Save</button>
    </div>
  )
}

export default EditItemDetails