import React from 'react'

const FindPage = ({ setSearchAndParams }) => (
  <div>
    <p>Find movie ID: </p>
    <input type='text' id='query' />
    <button 
    onClick={() => setSearchAndParams('find', undefined, document.getElementById('query').value)}>
    Find Movie
    </button>
  </div>
)

export default FindPage