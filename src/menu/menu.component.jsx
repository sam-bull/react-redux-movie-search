import React from 'react';

const MainPage = ({ goToPage }) => (
  <div>
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

export default MainPage