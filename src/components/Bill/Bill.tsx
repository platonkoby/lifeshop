import React from 'react'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import { getButtonSize } from '../../Functions/GlobalFunctions'
import Divider from '../Divider'
import BillItem from './BillItem'
import BillList from './BillList'

function Bill() {
  return (
    <main className="bill">
            <BillList listName='Goals' />
          <div className="bill-divider">
            <IoMdRemove size={getButtonSize()} color='red' />
          </div>
            <BillList listName='Shop' />
          <div className="bill-divider">
            <Divider />
          </div>
            <BillItem name='Total' value={500} bold={true} />
            <div className="bill-divider">
                <IoMdAdd size={getButtonSize()} color='green' />
            </div>
            <BillItem name='Balance' value={1000} bold={true} />
            <div className="bill-divider">
                <Divider />
            </div>
            <BillItem name='Net Total' value={1500} bold={true} />
        </main>
  )
}

export default Bill