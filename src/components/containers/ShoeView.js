import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import ImageViewer from './ImageView';

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

  render() {
    console.log(this.props.shoe);
    const { name, images, cost, gender, description } = this.props.shoe;
    const { addToBasket } = this;
    return (
      <div className=''>
        <div className='row'>
          {this.props.shoe && (
            <React.Fragment>
              <div
                className='col lg8 sm12 m8 xl8'
                style={{ paddingLeft: '175px' }}
              >
                <h3>{name}</h3>
                <ImageViewer images={images} />
              </div>
              <div
                className='col lg4 sm12 m4 xl4'
                style={{ minHeight: '1000px' }}
              >
                <h3 className='header'>£{cost}</h3>
                <h6>Type: {gender.toUpperCase()}</h6>
                <br />
                <p>{description}</p>
                <br />

                <button className='waves-light btn-large' onClick={addToBasket}>
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
    );
  }
}
