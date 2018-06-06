import React from 'react'

const SearchPage = ({ setSearchAndParams }) => (
  <div>
    <p>Search text: </p>
    <input type='text' id='query' />
    <button
      onClick={() => { console.log('click search'); setSearchAndParams('search', undefined, document.getElementById('query').value)} }>
      Search Movies
    </button>
  </div>
)

export default SearchPage