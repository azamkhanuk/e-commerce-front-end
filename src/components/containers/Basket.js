import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export class Basket extends Component {
  state = {};

  componentDidMount() {
    this.props.getBasketData();
  }

  render() {
    const { total, basket } = this.props;
    return (
      basket && (
        <div className='container'>
          <div className='col s12 m7'>
            <ul className='collection'>
              {basket.map((shoe, index) => {
                return (
                  <li className='collection-item avatar' key={index}>
                    <div>
                      <h6 className='text-align: right'>£{shoe.cost}</h6>
                    </div>
                    <img src={shoe.images[0]} alt='' className='circle' />
                    <span className='title'>{shoe.name}</span>
                    <p>{shoe.gender}</p>
                  </li>
                );
              })}
            </ul>
            <h5 className='header'>Total: £{total ? total : null}</h5>
            <Link to='/checkout'>
              <Button secondary>
                <i
                  className='far fa-credit-card'
                  style={{ marginRight: '5px' }}
                />
                Checkout
              </Button>
            </Link>
          </div>
        </div>
      )
    );
  }
}

export default Basket;
