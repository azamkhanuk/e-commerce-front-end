import React, { Component } from 'react'
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
    const { total, basket } = this.props
    return (
      <div className='container'>
        <div className='col s12 m7'>
          <ul className='collection'>
            {basket.map((shoe, index) => {
              return (
                <li
                  className='collection-item avatar'
                  key={`${shoe.item.id}-${index}`}
                >
                  <div>
                    <h6 className='text-align: right'>£{shoe.item.cost}</h6>
                  </div>
                  <img src={shoe.colors[0].image} alt='' className='circle' />
                  <span className='title'>{shoe.item.name}</span>

                  <p>{shoe.item.gender}</p>
                </li>
              )
            })}
          </ul>
          <h5 className='header'>Total: £{total ? total : null}</h5>
          <Link to='/checkout'>
            <button className='waves-light btn-large'>
              <i
                className='far fa-credit-card'
                style={{ marginRight: '5px' }}
              />
              Go to Checkout
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Basket
