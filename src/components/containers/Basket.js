import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'

export class Basket extends Component {
  state = {
    basket: null
  }

  componentDidMount() {
    this.props.getBasketData()
    // this.setState(
    //   {
    //     basket: JSON.parse(localStorage.getItem('shoeObject'))
    //   }
    //   // () => this.getSummary()
    // )
  }

  // getSummary = () => {
  //   const reducer = (accumulator, currentValue) => accumulator + currentValue

  //   this.setState({
  //     finalPrice: this.state.basket
  //       .map(shoe => parseInt(shoe.item.cost))
  //       .reduce(reducer)
  //   })
  // }

  render() {
    return (
      <div className='col s12 m7'>
        <h5 className='header'>
          Total: £{this.props.total ? this.props.total : null}
        </h5>
        <Link to='/checkout'>
          <button className='waves-light btn-large'>
            <i className='far fa-credit-card' style={{ marginRight: '5px' }} />
            Go to Checkout
          </button>
        </Link>
        <div className='divider' />
        {this.props.basket &&
          this.props.basket.map((shoe, index) => {
            return (
              <div className='card horizontal' key={`${shoe.item.id}-${index}`}>
                <div className='card-image'>
                  <p>{shoe.item.name}</p>
                  <p>£{shoe.item.cost}</p>

                  <img
                    width='200'
                    height='200'
                    className='materialboxed responsive-image'
                    src={shoe.colors[0].image}
                    alt={shoe.item.name}
                  />
                </div>
              </div>
            )
          })}
      </div>
    )
  }
}

export default Basket
