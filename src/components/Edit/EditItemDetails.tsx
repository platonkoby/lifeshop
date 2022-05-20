import React from 'react'
import '../../styles/edit-item.css'

function EditItemDetails() {
  return (
    <div className="item-details-section">    
        <div className='item-details'>
            <div className="item-detail">
                <p className="detail-name">name:</p>
                <input type='text' className="detail-value" />
            </div>
            <div className="item-detail">
                <p className="detail-name">name:</p>
                <input type='text' className="detail-value" />
            </div>
            <div className="item-detail">
                <p className="detail-name">name:</p>
                <input type='text' className="detail-value" />
            </div>
        </div>
        <button className='save-details-btn'>Save</button>
    </div>
  )
}

export default EditItemDetails