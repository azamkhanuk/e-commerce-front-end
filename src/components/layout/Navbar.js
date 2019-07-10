import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Dropdown, Icon } from 'semantic-ui-react';

export default class Navbar extends Component {
  componentDidMount() {
    this.props.getBasketData();
  }
  trigger = (
    <span>
      <Icon name='user' /> Hello, Fernando
    </span>
  );

  options = [
    {
      key: 'user',
      text: (
        <span>
          Signed in as <strong>Fernando Lopez</strong>
        </span>
      ),
      disabled: true
    },
    { key: 'profile', text: 'Your Profile' },
    { key: 'favourites', text: 'Your Favourites' },
    { key: 'checkout', text: 'Checkout' },
    { key: 'faq', text: 'F.A.Q' },
    { key: 'sign-out', text: 'Sign Out' }
  ];

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
              <Menu.Item>
                <Dropdown trigger={this.trigger} options={this.options} />
              </Menu.Item>
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
