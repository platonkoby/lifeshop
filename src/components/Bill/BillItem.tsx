import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { getColor } from '../../Functions/GlobalFunctions'
import { BillItemProps } from '../../models/bill.models'

function BillItem({ bold, name, value, amount, negative = false } : BillItemProps) {

    const style = {
        fontWeight: bold ? '500' : '100',
        fontSize: bold ? '1.5rem' : '1.3rem',
    }

    const valueStyle = {...style, color: getColor(value, negative)}

  return (
    <div className="bill-item">
        <h3 style={style} className='bill-item-name'>{name}</h3>
        <div className="bill-item-value">
            {/* <IoMdAdd /> */}
            <p style={valueStyle}>{value}</p>
            {amount &&
            <p>({amount})</p>
            }
        </div>
    </div>
  )
}

export default BillItem