import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'

const ShoeItem = props => {
  const { shoe, handleShoeClick } = props
  return (
    <Link to={`/shoes/${shoe.id}`}>
      <div className='col custom-col grid-example s12 m7'>
        <div className='card'>
          <div className='card-image' onClick={handleShoeClick}>
            <img src={shoe.colors[0].image} alt={shoe.name} />
          </div>
          <div
            className='card-content'
            style={{ padding: '0', paddingBottom: '24px', textAlign: 'center' }}
          >
            <p>{shoe.name}</p>
            <p>£{shoe.cost}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ShoeItem
