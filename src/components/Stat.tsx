import React from 'react'
import { StatProps } from '../models/stat.models'
import '../styles/stat.css'

function Stat({ name, color, value, items } : StatProps) {
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