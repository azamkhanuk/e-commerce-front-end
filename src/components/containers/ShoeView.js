import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import ImageViewer from './ImageView';

class ShoeView extends Component {
  state = {
    item: null
  };

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
    const { item } = this.state;
    return (
      <div className=''>
        <div className='row'>
          {this.props.shoe && (
            <React.Fragment>
              <div
                className='col lg8 sm12 m8 xl8'
                style={{ paddingLeft: '175px' }}
              >
                <h3>{this.props.shoe.name}</h3>
                <ImageViewer images={this.props.shoe.images} />
              </div>
              <div
                className='col lg4 sm12 m4 xl4'
                style={{ minHeight: '1000px' }}
              >
                <h3 className='header'>£{this.props.shoe.cost}</h3>
                <h6>Type: {this.props.shoe.gender.toUpperCase()}</h6>
                <br />
                <p>{this.props.shoe.description}</p>
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
    );
  }
}

export default ShoeView;
