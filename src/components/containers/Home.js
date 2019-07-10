import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ShoeList from './ShoeList';

export default class Home extends Component {
  state = {
    search: ''
  };

  filterSearch = () => {
    return this.props.shoes.filter(shoe => {
      return shoe.name.toLowerCase().includes(this.state.search.toLowerCase());
    });
  };

  handleSearch = e => {
    this.setState({
      search: e.target.value
    });
  };

  render() {
    return (
      <div>
        <SearchBar handleSearch={this.handleSearch} />
        <ShoeList
          shoes={this.filterSearch()}
          handleShoeClick={this.props.handleShoeClick}
        />
      </div>
    );
  }
}
