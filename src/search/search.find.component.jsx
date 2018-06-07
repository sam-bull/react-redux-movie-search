import React from 'react'
import './search.css'

const FindPage = ({ setSearchParams }) => (
  <div className='search-container'>
    <div>Find movie ID: </div>
    <input type='text' id='query' />
    <button 
    onClick={() => setSearchParams(undefined, document.getElementById('query').value)}>
    Find Movie
    </button>
  </div>
)

export default FindPage