import React from 'react'
import { CardProps } from '../models/card.models'
import '../styles/card.css'

function Card({ header, children } : CardProps) {
  return (
    <div className='card'>
        <h2 className='card-question'>{header}</h2>
        <div className='card-text'>{children}</div>
    </div>
  )
}

export default Card