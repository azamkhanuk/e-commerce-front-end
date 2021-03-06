import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Checkout extends Component {
  state = {
    // shipping: 9.99,
  }

  componentDidMount() {
    console.log(this.props.total)
    console.log(this.props.basket)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // calculateTotal = () => {
  //   return Math.round(
  //     parseFloat(this.state.shipping) + parseFloat(this.state.total)
  //   )
  // }
  render() {
    console.log(this.state)
    const { total, basket } = this.props
    const { handleChange } = this

    return (
      <div className='container'>
        <h5 className='header'>My Shopping Bag({basket.length})</h5>
        <div className='divider' />
        <h6>SubTotal = £{total}</h6>
        <h6>Shipping = £0.00</h6>
        <h6>Total = £{total}</h6>
        <div className='divider' />
        <br />
        <div className='container'>
          <div className='row'>
            <form className='co1 s12'>
              <div className='row'>
                <div className='input-field col s6'>
                  <input
                    id='first_name'
                    name='first_name'
                    type='text'
                    className='validate'
                    onChange={handleChange}
                  />
                  <label htmlFor='first_name'>First Name*</label>
                </div>
                <div className='input-field col s6'>
                  <input
                    id='last_name'
                    type='text'
                    className='validate'
                    onChange={handleChange}
                    name='last_name'
                  />
                  <label htmlFor='first_name'>Last Name*</label>
                </div>
                <div className='row'>
                  <div className='input-field col s12'>
                    <input
                      name='email'
                      id='email'
                      type='email'
                      className='validate'
                      onChange={handleChange}
                    />
                    <label htmlFor='email'>Email*</label>
                  </div>
                </div>
                <div className='row'>
                  <div className='input-field col s12'>
                    <input
                      name='address_line_1'
                      id='address_line_1'
                      type='text'
                      className='validate'
                      onChange={handleChange}
                    />
                    <label htmlFor='address1'>Address Line 1*</label>
                  </div>
                </div>
                <div className='row'>
                  <div className='input-field col s12'>
                    <input
                      name='address_line_2'
                      id='address_line_2'
                      type='text'
                      className='validate'
                      onChange={handleChange}
                    />
                    <label htmlFor='address2'>Address Line 2</label>
                  </div>
                  <div className='input-field col s6'>
                    <input
                      name='city'
                      id='city'
                      type='text'
                      className='validate'
                      onChange={handleChange}
                    />
                    <label htmlFor='city'>City</label>
                  </div>
                  <div className='input-field col s6'>
                    <input
                      name='postcode'
                      id='postcode'
                      type='text'
                      className='validate'
                      onChange={handleChange}
                    />
                    <label htmlFor='postcode'>Post Code*</label>
                  </div>
                  <div className='input-field col s6'>
                    <input
                      name='country'
                      id='Country'
                      type='text'
                      className='validate'
                      placeholder='United Kingdom'
                      onChange={handleChange}
                    />
                    <label htmlFor='Country'>Country</label>
                  </div>
                  <div className='input-field col s6'>
                    <input
                      name='phone'
                      id='phonenum'
                      type='text'
                      className='validate'
                      placeholder='+44'
                      onChange={handleChange}
                    />
                    <label htmlFor='phonenum'>Phone Number*</label>
                  </div>
                  <div>
                    <Link
                      to={{
                        pathname: '/order-status',
                        state: { ...this.state }
                      }}
                    >
                      {/* <Link {{state : {this.state}, to='/order-status'}}> */}
                      <button className='waves-light btn-large'>
                        <i
                          className='far fa-check-circle'
                          style={{ marginRight: '5px' }}
                        />
                        Complete Order
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Checkout
