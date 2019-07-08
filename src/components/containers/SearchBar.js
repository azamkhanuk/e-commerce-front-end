import React, { Component } from 'react';
import { Menu, Input } from 'semantic-ui-react';
// import { Search, Menu, Container, Segment, Input } from 'semantic-ui-react';

export default class SearchBar extends Component {
  render() {
    // const { handleSearch } = this.props;
    return (
      <Menu alight='center' inverted>
        <Menu.Item>
          <Input className='icon' icon='search' placeholder='Search...' />
        </Menu.Item>
      </Menu>
    );
  }
}
