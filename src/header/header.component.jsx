import React from 'react';
import './header.css'

const Header = ({ goToPage, page }) => (
  <div className='header'>
    <h1>The Movie Database</h1>
    <div className='buttons'>
      <button className='button' autoFocus onClick={goToPage('search')}>
        Search
    </button>
      <button className='button' onClick={goToPage('discover')}>
        Discover
    </button>
      <button className='button' onClick={goToPage('find')}>
        Find
    </button>
    </div>
  </div>
)

export default Header