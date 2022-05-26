import React, { SyntheticEvent, useEffect, useState } from 'react'
import { MultiSelectionOptions, StringDetailProps } from '../../models/edit.inventory.models'
import { MultiSelect } from 'react-multi-select-component'

function Detail({ itemKey, value, valueType, updateItem } : StringDetailProps) {

    const [multiSelectionOptions, setMultiSelectionOptions] = useState<MultiSelectionOptions[]>(getMultiSelectOptions())

    function getMultiSelectOptions() {
        if (valueType !== 'array') return []
        return value.map(item => ({label: item, value: item}))
    }

    const handleMultiSelection = (selected : MultiSelectionOptions[]) => {
        const newValue = selected.map(item => item.value)
        setMultiSelectionOptions(selected)
        updateItem(itemKey, newValue)
    }

    const handleValueChange = (e : SyntheticEvent) => {
        const target = e.target as HTMLInputElement;
        
        valueType === 'number'
        ? updateItem(itemKey, parseFloat(target.value))
        : updateItem(itemKey, target.value)
    }
    
      return (
    <div>
        {valueType === 'string' &&
        <input type="text" defaultValue={value} onChange={handleValueChange} />}
        {valueType === 'number' &&
        <input type="number" defaultValue={value} onChange={handleValueChange} />}
        {valueType === 'array' &&
        <MultiSelect 
            options={getMultiSelectOptions()} 
            labelledBy="Select" 
            value={multiSelectionOptions} 
            hasSelectAll={false}
            onChange={handleMultiSelection} />
        }
    </div>
  )
}

export default Detail