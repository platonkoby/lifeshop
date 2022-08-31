import React, { useEffect } from 'react'
import { getColor, returnNumberIfNumber } from '../Functions/GlobalFunctions'
import { StatProps } from '../models/stat.models'
import '../styles/stat.css'

function Stat({ name, value, negative = false } : StatProps) {

    const color = getColor(returnNumberIfNumber(value), negative)
    
  return (
    <div className="stat">
        <h3>{name}:</h3>
        <p style={{color: color}}>{ Array.isArray(value) 
            ? value?.map((item, id) => id + 1 === value.length ? item : `${item}, `) 
            : value }
          </p>
    </div>
  )
}

export default Stat