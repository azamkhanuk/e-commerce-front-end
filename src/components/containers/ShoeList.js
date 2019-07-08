import React from 'react';
import ShowItem from './ShoeItem';

const ShoeList = props => {
  // const test = props.shoes.filter(x => x._id === '5d1ca7a5bef6fe29828fdfc0');
  // console.log(test);
  return (
    <div className=''>
      <div className='row left-align'>
        {props.shoes.map(shoe => {
          return (
            <ShowItem
              key={shoe._id}
              shoe={shoe}
              handleShoeClick={() => props.handleShoeClick(shoe._id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShoeList;
