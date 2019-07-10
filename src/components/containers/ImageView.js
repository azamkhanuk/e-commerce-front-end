import React, { Component } from 'react';

class ImageView extends Component {
  render() {
    return (
      <div>
        <ul className='slides'>
          {this.props.images.map((pics, i) => {
            return (
              <li key={i}>
                <img src={pics} alt='' className='materialboxed' />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ImageView;
