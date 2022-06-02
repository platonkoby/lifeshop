import React, { useState } from 'react'
import { BillItemProps, BillListProps } from '../../models/bill.models'
import BillItem from './BillItem'

function BillList({ listName, items } : BillListProps) {

  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded((expanded) => !expanded)

  return (
    <div className="bill-items" onClick={toggleExpanded}>
        <BillItem name={listName} value={1000} bold={true} />
        {expanded &&
          <BillItem name='something' value={50} amount={5} /> 
        }
    </div>
  )
}

export default BillList