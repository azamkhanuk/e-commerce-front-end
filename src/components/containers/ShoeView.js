import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import ImageViewer from './ImageView';
import { Container, Header, Image, Dropdown, Button } from 'semantic-ui-react';

export default class ShoeView extends Component {
  componentDidMount() {
    const elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems);
  }

  addToBasket = () => {
    localStorage.getItem('shoeObject')
      ? localStorage.setItem(
          'shoeObject',
          JSON.stringify([
            ...JSON.parse(localStorage.getItem('shoeObject')),
            this.props.shoe
          ])
        )
      : localStorage.setItem(
          'shoeObject',
          `[${JSON.stringify(this.props.shoe)}]`
        );
    this.props.getBasketData();
  };

  sizes = [
    {
      key: '5',
      text: '5',
      value: '5'
    },
    {
      key: '6',
      text: '6',
      value: '6'
    },
    {
      key: '7',
      text: '7',
      value: '7'
    },
    {
      key: '8',
      text: '8',
      value: '8'
    },
    {
      key: '9',
      text: '9',
      value: '9'
    }
  ];

  center = {
    textAlign: 'left'
  };

  bold = {
    fontWeight: 'bold'
  };

  render() {
    console.log(this.props.shoe);
    const { name, images, cost, gender, description } = this.props.shoe;
    const { addToBasket, center, bold, sizes } = this;
    return (
      <div style={{ marginTop: '20px' }} className='ui grid'>
        <div className='row'>
          {this.props.shoe && (
            <React.Fragment>
              <div className='ten wide column'>
                <Image fluid>
                  <ImageViewer images={images} />
                </Image>
              </div>

              <div className='four wide column' style={{ marginTop: '100px' }}>
                <Container>
                  <Header as='h1' style={{ ...center, ...bold }}>
                    {name}
                  </Header>
                  <br />
                  <span style={{ marginBottom: '10px' }}>Size</span>

                  <Dropdown
                    placeholder='Select Size'
                    fluid
                    selection
                    options={sizes}
                  />
                  <h3 className='header'>£{cost}</h3>
                  <Button secondary onClick={addToBasket}>
                    <i
                      className='fas fa-shopping-cart'
                      style={{ marginRight: '5px' }}
                    />
                    Add to Basket
                  </Button>
                  <Header as='h4'>{gender.toUpperCase()}</Header>
                  <br />
                  <p>{description}</p>
                  <br />
                </Container>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}
