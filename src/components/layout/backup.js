import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from 'semantic-ui-react';

class Navbar extends Component {
  componentDidMount() {
    this.props.getBasketData();
  }

  render() {
    const { basket } = this.props;
    return (
      <nav>
        <div
          className='nav-wrapper'
          style={{ marginLeft: '50px', marginRight: '50px' }}
        >
          <Link to='/' className='brand-logo'>
            BEEM STORE
            <i className='fas fa-chess-king' />
          </Link>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <div>
                <Link to='/basket'>
                  <i
                    className='fas fa-shopping-basket'
                    style={{ marginRight: '5px' }}
                  />
                  {basket ? basket.length : null}
                </Link>
              </div>
            </li>
            <li>
              <a href='./'>
                <i className='fas fa-hand-holding-heart' />
              </a>
            </li>
            <li>
              <a href='./'>
                <i className='fas fa-sign-out-alt' />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
