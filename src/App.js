import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import StoreContainer from './components/containers/StoreContainer';
import ShoeView from './components/containers/ShoeView';
import Basket from './components/containers/Basket';
import Checkout from './components/containers/Checkout';
import OrderStatus from './components/containers/OrderStatus';
import { Route, Switch, withRouter } from 'react-router-dom';

class App extends Component {
  state = {
    basket: [],
    total: null
  };

  componentDidMount() {
    this.getBasketData();
  }

  getBasketData = () => {
    try {
      this.setState(
        {
          basket: JSON.parse(localStorage.getItem('shoeObject'))
        },
        () => this.getSummary()
      );
    } catch (error) {
      console.log(error);
    }
  };

  getSummary = () => {
    // const reducer = (accumulator, currentValue) => accumulator + currentValue;
    // this.setState({
    //   total: this.state.basket
    //     .map(shoe => parseInt(shoe.item.cost))
    //     .reduce(reducer)
    // });
    console.log(this.state.basket);
  };

  render() {
    const { basket } = this.state;
    const { getBasketData } = this;

    return (
      <React.Fragment>
        <Navbar getBasketData={getBasketData} basket={basket ? basket : null} />
        <Switch>
          <Route path='/' component={StoreContainer} exact />
          <Route
            path='/shoes/:id'
            render={props => (
              <ShoeView {...props} getBasketData={this.getBasketData} />
            )}
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
      </React.Fragment>
    );
  }
}

export default withRouter(App);
