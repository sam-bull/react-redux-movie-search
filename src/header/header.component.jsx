import React from 'react';
import './header.css'

const Header = ({ setSearchType, page }) => (
  <div className='header'>
    <h1>THE<br />MOVIE<br />DB</h1>
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