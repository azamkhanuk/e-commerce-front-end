import React, { Component } from 'react'

export class OrderStatus extends Component {
  render() {
    console.log(this.props)
    const {
      first_name,
      last_name,
      address_line_1,
      address_line_2,
      city,
      country,
      postcode,
      email,
      phone
    } = this.props.location.state
    return (
      <div className='container'>
        <h2>Order Status:</h2>
        <h5>
          <strong>Your payment has gone through</strong>
        </h5>

        <h5>Your Details:</h5>
        <h6>
          Name: {first_name} {last_name}
        </h6>
        <h6>
          Address: {address_line_1}, {address_line_2}, {city}, {country},
          {postcode}
        </h6>
        <h6>
          We will contact you through <strong>{email}</strong> and you will
          recieve a text promptly on <strong>{phone}</strong>.
        </h6>
        <h6>Thanks for ordering!</h6>
      </div>
    )
  }
}

export default OrderStatus
