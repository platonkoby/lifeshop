import React, { useState } from 'react'
import { BillItemProps, BillListProps } from '../../models/bill.models'
import BillItem from './BillItem'
import { addValuesInList } from '../../Functions/CartLogick'
import { nanoid } from 'nanoid'

function BillList({ listName, items, negative = false } : BillListProps) {

  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded((expanded) => !expanded)

  const getListValue = () => addValuesInList(items)

  return (
    <div className="bill-items" onClick={toggleExpanded}>
        <BillItem name={listName} value={getListValue()} bold={true} negative={negative} />
        {expanded &&
          items.map((item) => (
            <BillItem name={item.name} value={item.value} amount={item.amount} negative={negative} key={nanoid()} /> 
          ))
        }
    </div>
  )
}

export default BillList