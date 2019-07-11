import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class Checkout extends Component {
  state = {
    shipping: 9.99
  };

  componentDidMount() {
    console.log(this.props.total);
    console.log(this.props.basket);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  calculateTotal = () =>
    parseFloat(this.state.shipping) + parseFloat(this.props.total);

  render() {
    console.log(this.state);
    console.log(this.props.total);
    console.log(this.state.shipping);

    console.log(this.calculateTotal());
    const { total, basket } = this.props;
    const { handleChange } = this;

    return (
      <div className='container'>
        <h5 className='header' style={{ marginTop: '50px' }}>
          My Shopping Bag({basket.length})
        </h5>
        <div className='divider' />
        <h6>Subtotal = £{total}</h6>
        <h6>Shipping = £{this.state.shipping}</h6>
        <h6>Total = £{this.calculateTotal()}</h6>
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

                      <Button secondary>
                        <i
                          className='far fa-check-circle'
                          style={{ marginRight: '5px' }}
                        />
                        Checkout
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
