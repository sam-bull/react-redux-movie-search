import React from 'react';
import './header.css'

const Header = ({ setSearchType, page }) => (
  <div className='header'>
    <h1>The Movie Database</h1>
    <div className='buttons'>
      <button className='button' autoFocus onClick={setSearchType('search')}>
        Search
    </button>
      <button className='button' onClick={setSearchType('discover')}>
        Discover
    </button>
      <button className='button' onClick={setSearchType('find')}>
        Find
    </button>
    </div>
  </div>
)

export default Header