import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    const { handleSearch } = this.props
    return (
      <nav>
        <div className='nav-wrapper'>
          <form>
            <div className='input-field'>
              <input id='search' type='search' onChange={handleSearch} />
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
