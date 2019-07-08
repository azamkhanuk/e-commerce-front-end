import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  // Divider,
  // Dropdown,
  // Grid,
  // Header,
  // Image,
  // List,
  Menu
  // Segment
} from 'semantic-ui-react';

class Navbar extends Component {
  componentDidMount() {
    this.props.getBasketData();
  }

  render() {
    const { basket } = this.props;
    return (
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Link to='./'>
              <Menu.Item as='' header>
                <div>
                  <i className='fas fa-star-of-life' />
                </div>
                BEEM STORE
              </Menu.Item>
            </Link>

            <div className='right menu'>
              <Link to='/basket'>
                <Menu.Item>
                  <i
                    className='fas fa-shopping-basket'
                    style={{ marginRight: '5px' }}
                  />
                  {basket ? basket.length : null}
                </Menu.Item>
              </Link>
            </div>
            <Menu.Item as='a'>
              <i className='fas fa-hand-holding-heart' />
            </Menu.Item>
            <Menu.Item as='a'>
              <i className='fas fa-sign-out-alt' />
            </Menu.Item>
          </Container>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
