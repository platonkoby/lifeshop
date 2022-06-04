import React, { useContext } from 'react'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import { CartContext } from '../../context/CartContext'
import { Cart } from '../../Functions/CartLogick'
import { getButtonSize } from '../../Functions/GlobalFunctions'
import { BillProps } from '../../models/bill.models'
import Divider from '../Divider'
import BillItem from './BillItem'
import BillList from './BillList'

function Bill({ balance, goalList, shopList } : BillProps) {

    const { cartBalance } = useContext(CartContext)

    const getNetTotal = () => balance + cartBalance;

  return (
    <main className="bill">
            <BillList listName='Goals' items={goalList} />
          <div className="bill-divider">
            <IoMdRemove size={getButtonSize()} color='red' />
          </div>
            <BillList negative listName='Shop' items={shopList} />
          <div className="bill-divider">
            <Divider />
          </div>
            <BillItem name='Total' value={cartBalance} bold={true} />
            <div className="bill-divider">
                <IoMdAdd size={getButtonSize()} color='green' />
            </div>
            <BillItem name='Balance' value={balance} bold={true} />
            <div className="bill-divider">
                <Divider />
            </div>
            <BillItem name='Net Total' value={getNetTotal()} bold={true} />
        </main>
  )
}

export default Bill