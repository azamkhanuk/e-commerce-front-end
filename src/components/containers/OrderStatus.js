import React, { Component } from 'react';
import { Divider, Container, Header, Segment } from 'semantic-ui-react';

export class OrderStatus extends Component {
  render() {
    console.log(this.props);
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
    } = this.props.location.state;
    return (
      <Container>
        <Divider />
        <Header as='h1'>Order Status:</Header>
        <Segment raised>Your payment has gone through!</Segment>
        <Divider />
        <Header as='h2'>Your Details:</Header>
        <Segment.Group>
          <Segment>
            Name: {first_name} {last_name}
          </Segment>
          <Segment>Address Line 1: {address_line_1}</Segment>
          <Segment>Address Line 2: {address_line_2}</Segment>
          <Segment>City: {city}</Segment>
          <Segment>Country: {country}</Segment>
        </Segment.Group>
        <Segment>
          We will contact you through <strong>{email}</strong> and you will
          recieve a text promptly on <strong>{phone}</strong>.
        </Segment>
        <Segment inverted>Thanks for ordering!</Segment>
      </Container>
    );
  }
}

export default OrderStatus;
