import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import axios from 'axios'

class ShoeView extends Component {
  state = {
    item: null
  }

  componentDidMount() {
    const elems = document.querySelectorAll('.materialboxed')
    M.Materialbox.init(elems)
    axios
      .get(`http://localhost:3000/items/${this.props.match.params.id}`)
      .then(res => this.setState({ item: res.data }))
      .catch(err => console.log(err))
  }

  addToBasket = () => {
    localStorage.getItem('shoeObject')
      ? localStorage.setItem(
          'shoeObject',
          JSON.stringify([
            ...JSON.parse(localStorage.getItem('shoeObject')),
            this.state.item
          ])
        )
      : localStorage.setItem(
          'shoeObject',
          `[${JSON.stringify(this.state.item)}]`
        )
    this.props.getBasketData()
  }

  render() {
    const { item } = this.state
    return (
      <div className=''>
        <div className='row'>
          {item && (
            <React.Fragment>
              <div
                className='col lg8 sm12 m8 xl8'
                style={{ paddingLeft: '175px' }}
              >
                <h3>{this.state.item.item.name}</h3>
                <img
                  className='materialboxed responsive-image'
                  alt={this.state.item.item.name}
                  src={this.state.item.colors[0].image}
                />
              </div>
              <div
                className='col lg4 sm12 m4 xl4'
                style={{ minHeight: '1000px' }}
              >
                <h3 className='header'>£{this.state.item.item.cost}</h3>
                <h6>Type: {this.state.item.item.gender.toUpperCase()}</h6>
                <br />
                <p>{this.state.item.item.description}</p>
                <br />

                <button
                  className='waves-light btn-large'
                  onClick={this.addToBasket}
                >
                  <i
                    className='fas fa-shopping-cart'
                    style={{ marginRight: '5px' }}
                  />
                  Add to Basket
                </button>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    )
  }
}

export default ShoeView
