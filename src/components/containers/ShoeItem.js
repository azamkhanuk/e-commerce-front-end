import React from 'react';
import '../../App.css';
import { withRouter } from 'react-router-dom';

const ShoeItem = props => {
  const handleClick = () => props.history.push(`/shoe/${shoe._id}`);

  const { shoe, handleShoeClick } = props;
  return (
    <div className='column'>
      <div onClick={() => handleClick()} className='ui fluid card'>
        {/* <Link to={`/shoe/${shoe._id}`}> */}
        <div className='ui slide masked reveal image' onClick={handleShoeClick}>
          <img
            src={shoe.images[0]}
            alt={shoe.name}
            className='visible content'
          />
          <img
            src={shoe.images[1]}
            alt={shoe.name}
            className='hidden content'
          />
        </div>
        {/* </Link> */}
        <div className='content'>
          <div
            className='description'
            style={{
              padding: '0',
              paddingBottom: '24px',
              textAlign: 'center'
            }}
          >
            <p>{shoe.name}</p>
            <p>£{shoe.cost}.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ShoeItem);
