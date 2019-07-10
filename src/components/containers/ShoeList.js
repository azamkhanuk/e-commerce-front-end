import React from 'react';
import ShowItem from './ShoeItem';

const ShoeList = props => {
  return (
    <div className='ui four column grid' style={{ margin: '5px' }}>
      {props.shoes.map(shoe => {
        return (
          <ShowItem
            key={shoe._id}
            shoe={shoe}
            handleShoeClick={() => props.handleShoeClick(shoe.id)}
          />
        );
      })}
    </div>
  );
};

export default ShoeList;
