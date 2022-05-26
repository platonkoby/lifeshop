import { useState } from 'react'
import { EditItemProps } from '../../models/edit.inventory.models'
import { RiHeart2Line, RiHeart2Fill, RiEditLine, RiDeleteBin6Line } from 'react-icons/ri'
import '../../styles/edit-item.css'
import { getSmallButtonSize } from '../../Functions/GlobalFunctions'
import EditItemDetails from './EditItemDetails'

function EditItem({ item, updateList } : EditItemProps) {

    const [isFavourite, setIsFavourite] = useState(item.favourite)
    const [openDetails, setOpenDetails] = useState(false)
    const toggleDetails = () => setOpenDetails((openDetails) => !openDetails)

    const toggleFavourite = () => {
      setIsFavourite((isFavourite) => !isFavourite)
      // updateList({...item, favourite: !item.favourite }, 'change')
    }

    const deleteItem = () => {
      updateList(item, 'delete')
    }


  return (
    <div className="edit-item">
        <div className='item'>
            <p className="item-name">{item.name}</p>
            <div className="item-actions">
                <RiEditLine onClick={toggleDetails} size={getSmallButtonSize()} />
                {isFavourite
                ? <RiHeart2Fill onClick={toggleFavourite} size={getSmallButtonSize()} color='pink' />
                : <RiHeart2Line onClick={toggleFavourite} size={getSmallButtonSize()} />
                }
                <RiDeleteBin6Line onClick={deleteItem} size={getSmallButtonSize()} />
            </div>
        </div>
        {openDetails 
        && <EditItemDetails updateList={updateList} item={item} />}
    </div>
  )
}

export default EditItem