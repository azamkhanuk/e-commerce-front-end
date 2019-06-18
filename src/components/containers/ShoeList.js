import React from 'react'
import ShowItem from './ShoeItem'

const ShoeList = props => {
  return (
    <div className=''>
      <div className='row left-align'>
        {props.shoes.map(shoe => {
          return (
            <ShowItem
              key={shoe.id}
              shoe={shoe}
              handleShoeClick={() => props.handleShoeClick(shoe.id)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ShoeList
