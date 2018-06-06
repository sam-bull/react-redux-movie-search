import React from 'react'
import './search.css'

const FindPage = ({ setSearchAndParams }) => (
  <div className='search-container'>
    <p>Find movie ID: </p>
    <input type='text' id='query' />
    <button 
    onClick={() => setSearchAndParams('find', undefined, document.getElementById('query').value)}>
    Find Movie
    </button>
  </div>
)

export default FindPage