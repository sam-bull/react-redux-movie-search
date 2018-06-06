import React from 'react'
import './search.css'

const FindPage = ({ setSearchParams }) => (
  <div className='search-container'>
    <p>Find movie ID: </p>
    <input type='text' id='query' />
    <button 
    onClick={() => setSearchParams(undefined, document.getElementById('query').value)}>
    Find Movie
    </button>
  </div>
)

export default FindPage