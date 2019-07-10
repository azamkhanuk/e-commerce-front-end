import React, { Component } from 'react';
import { Menu, Container, Dropdown, Image, Icon } from 'semantic-ui-react';

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
            <Menu.Item as='' header>
              <Dropdown text='Size'>
                <Dropdown.Menu>
                  <Dropdown.Item icon='window minimize outline' text='5' />
                  <Dropdown.Item icon='window minimize outline' text='5.5' />
                  <Dropdown.Item icon='window minimize outline' text='6' />
                  <Dropdown.Item icon='window minimize outline' text='6.5' />
                  <Dropdown.Item icon='window minimize outline' text='7' />
                  <Dropdown.Item icon='window minimize outline' text='7.5' />
                  <Dropdown.Item icon='window minimize outline' text='8' />
                  <Dropdown.Item icon='window minimize outline' text='8.5' />
                  <Dropdown.Item icon='window minimize outline' text='9' />
                  <Dropdown.Item icon='window minimize outline' text='9.5' />
                  <Dropdown.Item icon='window minimize outline' text='10' />
                  <Dropdown.Item icon='window minimize outline' text='10.5' />
                  <Dropdown.Item icon='window minimize outline' text='11' />
                  <Dropdown.Item icon='window minimize outline' text='11.5' />
                  <Dropdown.Item icon='window minimize outline' text='12' />
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
            <Menu.Item as='' header>
              <Dropdown text='Color'>
                <Dropdown.Menu>
                  <Dropdown.Item icon='window minimize outline' text='5'>
                    <Image
                      src={
                        'https://uk.louisvuitton.com/images/is/image/lv/1/LV/louis-vuitton--MAC-Z06_noir.jpg'
                      }
                      size='mini'
                    />
                    Black
                  </Dropdown.Item>
                  <Dropdown.Item icon='window minimize outline' text='5'>
                    <Image
                      src={
                        'https://uk.louisvuitton.com/images/is/image/lv/1/LV/louis-vuitton--MAC-Z01_blanc.jpg'
                      }
                      size='mini'
                    />
                    White
                  </Dropdown.Item>
                  <Dropdown.Item icon='window minimize outline' text='5'>
                    <Image
                      src={
                        'https://uk.louisvuitton.com/images/is/image/lv/1/LV/louis-vuitton--MAC-Z02_marron.jpg'
                      }
                      size='mini'
                    />
                    Brown
                  </Dropdown.Item>
                  <Dropdown.Item icon='window minimize outline' text='5'>
                    <Image
                      src={
                        'https://uk.louisvuitton.com/images/is/image/lv/1/LV/louis-vuitton--MAC-Z08_jaune.jpg'
                      }
                      size='mini'
                    />
                    Gold
                  </Dropdown.Item>
                  <Dropdown.Item icon='window minimize outline' text='5'>
                    <Image
                      src={
                        'https://uk.louisvuitton.com/images/is/image/lv/1/LV/louis-vuitton--MAC-Z11_rose.jpg'
                      }
                      size='mini'
                    />
                    Pink
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
            <Menu.Item as='' header>
              <Dropdown text='Rating'>
                <Dropdown.Menu>
                  <Dropdown.Item text=''>
                    <span style={{ marginRight: '7px' }}>1</span>
                    <Icon name='star outlined' style={{ margin: '7px' }} />
                  </Dropdown.Item>
                  <Dropdown.Item text=''>
                    <span style={{ marginRight: '7px' }}>2</span>
                    <Icon name='star outlined' />
                    <Icon name='star outlined' />
                  </Dropdown.Item>
                  <Dropdown.Item text=''>
                    <span style={{ marginRight: '7px' }}>3</span>
                    <Icon name='star outlined' />
                    <Icon name='star outlined' />
                    <Icon name='star outlined' />
                  </Dropdown.Item>
                  <Dropdown.Item text=''>
                    <span style={{ marginRight: '7px' }}>4</span>
                    <Icon name='star outlined' />
                    <Icon name='star outlined' />
                    <Icon name='star outlined' />
                    <Icon name='star outlined' />
                  </Dropdown.Item>
                  <Dropdown.Item text=''>
                    <span style={{ marginRight: '7px' }}>5</span>
                    <Icon name='star outlined' />
                    <Icon name='star outlined' />
                    <Icon name='star outlined' />
                    <Icon name='star outlined' />
                    <Icon name='star outlined' />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>

            <div className='right menu'>
              <Menu.Item>
                <i
                  className='fas fa-sliders-h'
                  style={{ marginRight: '7px' }}
                />
                Filters
              </Menu.Item>
            </div>
          </Container>
        </Menu>
      </div>
    );
  }
}
