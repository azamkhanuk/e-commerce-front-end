import React, { Component } from 'react';
import axios from 'axios';
import ShoeList from './ShoeList';
import SearchBar from './SearchBar';

export default class StoreContainer extends Component {
  state = {
    shoes: [],
    selectedShoe: {},
    search: '',
    selectedToggle: false
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/trainers')
      .then(data => this.setState({ shoes: data.data }));
  }

  handleShoeClick = id => {
    let selectedShoe = this.state.shoes.find(shoe => shoe.id === id);
    this.setState({ selectedShoe: selectedShoe, selectedToggle: true });
  };

  handleSearch = e => {
    this.setState({
      search: e.target.value
    });
  };

  filterSearch = () => {
    return this.state.shoes.filter(shoe => {
      return shoe.name.toLowerCase().includes(this.state.search.toLowerCase());
    });
  };

  render() {
    const { handleSearch, handleShoeClick, filterSearch } = this;
    return (
      <div>
        <SearchBar handleSearch={handleSearch} />
        <ShoeList shoes={filterSearch()} handleShoeClick={handleShoeClick} />
      </div>
    );
  }
}
