import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <form>
            <div className='input-field'>
              <input
                id='search'
                type='search'
                onChange={this.props.handleSearch}
              />
              <label className='label-icon'>
                <i className='fas fa-search' />
              </label>
            </div>
          </form>
        </div>
      </nav>
    )
  }
}
