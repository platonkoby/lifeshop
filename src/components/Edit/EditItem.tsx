import { useState } from 'react'
import { EditItemProps } from '../../models/edit.inventory.models'
import { RiHeart2Line, RiEditLine, RiDeleteBin6Line } from 'react-icons/ri'
import '../../styles/edit-item.css'
import { getSmallButtonSize } from '../../Functions/GlobalFunctions'
import EditItemDetails from './EditItemDetails'

function EditItem({ item } : EditItemProps) {

    const [openDetails, setOpenDetails] = useState(false)

    const toggleDetails = () => setOpenDetails((openDetails) => !openDetails)

  return (
    <div className="edit-item">
        <div className='item'>
            <p className="item-name">{item}</p>
            <div className="item-actions">
                <RiEditLine onClick={toggleDetails} size={getSmallButtonSize()} />
                <RiHeart2Line size={getSmallButtonSize()} />
                {/* RiHeart2Fill size={getSmallButtonSize()} */}
                <RiDeleteBin6Line size={getSmallButtonSize()} />
            </div>
        </div>
        {openDetails 
        && <EditItemDetails />}
    </div>
  )
}

export default EditItem