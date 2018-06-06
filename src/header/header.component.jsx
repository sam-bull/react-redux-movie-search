import React from 'react';

const Header = ({ goToPage }) => (
  <div>
  <h1>The Movie Database</h1>
    <button onClick={goToPage('search')}>
      Search
    </button>
    <button onClick={goToPage('discover')}>
      Discover
    </button>
    <button onClick={goToPage('find')}>
      Find
    </button>
  </div>
)

export default Header