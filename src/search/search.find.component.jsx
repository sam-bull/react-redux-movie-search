import React from 'react'
import './search.css'

const FindPage = ({ search }) => (
  <div className='search-container'>
    <div>Find by IMDB ID: </div>
    <input type='text' id='query' />
    <button
      onClick={() => search('find', undefined, document.getElementById('query').value)}>
      Find Movie
    </button>
  </div>
)

export default FindPage