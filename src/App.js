import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ShoeView from './components/containers/ShoeView';
import Basket from './components/containers/Basket';
import Checkout from './components/containers/Checkout';
import OrderStatus from './components/containers/OrderStatus';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';

import Home from './components/containers/Home';

class App extends Component {
  state = {
    shoes: [],
    basket: [],
    search: '',
    selectedShoe: {},
    total: null
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/trainers')
      .then(data => this.setState({ shoes: data.data }));
  }

  handleShoeClick = id => {
    let selectedShoe = this.state.shoes.find(shoe => shoe._id === id);
    this.setState({ selectedShoe: selectedShoe });
  };

  getBasketData = () => {
    const sliced = JSON.parse(localStorage.getItem('shoeObject'));
    const object = sliced.slice(1, -1);
    this.setState(
      {
        basket: object
      },
      () => this.getSummary()
    );
  };

  getSummary = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    this.setState({
      total: this.state.basket.map(shoe => parseInt(shoe.cost)).reduce(reducer)
    });
  };

  render() {
    const { basket, shoes } = this.state;
    const { getBasketData, handleShoeClick } = this;

    return (
      <React.Fragment>
        <Navbar getBasketData={getBasketData} basket={basket ? basket : null} />
        <Switch>
          <Route
            exact
            path='/'
            component={props => (
              <Home
                {...props}
                shoes={shoes}
                handleShoeClick={handleShoeClick}
              />
            )}
          />
          <Route
            path='/shoe/:id'
            render={props => {
              const id = props.match.params.id;
              const shoes = this.state.shoes;
              const shoe = shoes.find(shoe => shoe._id == id);
              if (shoes.length === 0) return <h1>Loading</h1>;
              if (shoes.length > 0 && shoe === undefined)
                return <h1>Page not found</h1>;
              return (
                <ShoeView
                  {...props}
                  shoe={shoe}
                  getBasketData={this.getBasketData}
                />
              );
            }}
            exact
          />
          <Route
            path='/basket'
            render={props => (
              <Basket
                {...props}
                getBasketData={this.getBasketData}
                total={this.state.total}
                basket={this.state.basket}
              />
            )}
            exact
          />
          {this.state.total && (
            <Route
              path='/checkout'
              render={props => (
                <Checkout
                  {...props}
                  total={this.state.total}
                  basket={this.state.basket}
                />
              )}
              exact
            />
          )}
          {this.state.total && (
            <Route path='/order-status' component={OrderStatus} exact />
          )}
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
