import React from 'react';
import './header.css'

const Header = ({ setSearchType, page }) => (
  <div className='header'>
    <h1>The<br />Movie<br />DB</h1>
    {/* <div className='buttons'>
      <button className='button'>
        Movies
      </button>
      <button className='button'>
        TV
      </button>
      <button className='button'>
        People
      </button>
    </div> */}
  </div>
)

export default Header