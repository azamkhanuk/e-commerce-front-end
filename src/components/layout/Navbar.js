import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

export default class Navbar extends Component {
  componentDidMount() {
    this.props.getBasketData();
  }

  render() {
    const { basket } = this.props;
    return (
      <div>
        <Menu>
          <Container>
            <Menu.Item as={Link} name='home' to='/'>
              <div>
                <i
                  className='fas fa-chess-king'
                  style={{ marginRight: '7px' }}
                />
              </div>
              FAISANDÉ
            </Menu.Item>

            <div className='right menu'>
              <Menu.Item as={Link} name='basket' to='/basket'>
                <div className='ui vertical animated button' tabIndex='0'>
                  <div className='hidden content'>Shop</div>
                  <div className='visible content'>
                    <i
                      className='fas fa-shopping-basket'
                      style={{ marginRight: '5px' }}
                    />
                    {basket ? basket.length : null}
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item as='a'>
                <i className='fas fa-hand-holding-heart' />
              </Menu.Item>
              <Menu.Item as='a'>
                <i className='fas fa-sign-out-alt' />
              </Menu.Item>
            </div>
          </Container>
        </Menu>
      </div>
    );
  }
}
