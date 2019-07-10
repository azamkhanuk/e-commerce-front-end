import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';

export default class SearchBar extends Component {
  render() {
    const { handleSearch } = this.props;
    return (
      <div>
        <Menu>
          <Container>
            <Menu.Item as='' header>
              <i className='fas fa-search' style={{ marginRight: '7px' }} />
              <input
                type='text'
                placeholder='Search...'
                onChange={handleSearch}
              />
            </Menu.Item>

            <div className='right menu'>
              <Menu.Item>
                <div className='ui menu'>
                  <a className='browse item active'>
                    <i
                      className='fas fa-sliders-h'
                      style={{ marginRight: '7px' }}
                    />
                    Filters
                  </a>
                </div>
              </Menu.Item>
            </div>
          </Container>
        </Menu>
      </div>
    );
  }
}
