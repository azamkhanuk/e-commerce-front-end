import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'

const ShoeItem = props => {
  return (
    <Link to={`/shoes/${props.shoe.id}`}>
      <div className='col custom-col grid-example s12 m7'>
        <div className='card'>
          <div className='card-image' onClick={props.handleShoeClick}>
            <img src={props.shoe.colors[0].image} alt={props.shoe.name} />
          </div>
          <div
            className='card-content'
            style={{ padding: '0', paddingBottom: '24px', textAlign: 'center' }}
          >
            <p>{props.shoe.name}</p>
            <p>£{props.shoe.cost}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ShoeItem
