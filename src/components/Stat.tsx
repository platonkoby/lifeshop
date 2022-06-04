import React from 'react'
import { getColor } from '../Functions/GlobalFunctions'
import { StatProps } from '../models/stat.models'
import '../styles/stat.css'

function Stat({ name, value, items, negative = false } : StatProps) {

    const color = getColor(value, negative)

  return (
    <div className="stat">
        <h3>{name}:</h3>
        <p style={{color: color}}>{ typeof value === 'number' 
            ? value 
            : items?.map(item => item) }</p>
    </div>
  )
}

export default Stat