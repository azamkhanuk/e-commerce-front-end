import React, { Component } from 'react';
import M from 'materialize-css';
import './ImageView.css';

class ImageView extends Component {
  componentDidMount() {
    console.log(this.props);
    const options = { interval: 10000000000 };
    const elems = document.querySelectorAll('.slider');
    M.Slider.init(elems, options);
    const elems2 = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems2);
  }

  moveNext = e => {
    e.preventDefault();
    const elems = document.querySelector('.slider');
    const moveRight = M.Slider.getInstance(elems);
    moveRight.next(1);
  };

  movePrevious = e => {
    e.preventDefault();

    const elems = document.querySelector('.slider');
    const moveLeft = M.Slider.getInstance(elems);
    moveLeft.prev(1);
  };

  style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };

  render() {
    return (
      <div className='row'>
        <div className='slider'>
          <ul className='slides'>
            {this.props.images.map(x => {
              return (
                <li>
                  <img src={`${x}`} alt={`${x}`} style={this.style} />
                </li>
              );
            })}
          </ul>
          <div className='col s12' style={{ pointerEvents: 'all' }}>
            <a href='#' onClick={this.movePrevious}>
              <i class='fas fa-chevron-left' />
            </a>
            <a href='#' onClick={this.moveNext} style={{ float: 'right' }}>
              <i class='fas fa-chevron-right' />
            </a>
          </div>
          <div />
        </div>
      </div>
    );
  }
}

export default ImageView;
