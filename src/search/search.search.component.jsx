import React from 'react'
import { connect } from 'react-redux'
import { searchAndUpdateResultsAction } from './search.actions'
import './search.css'

const SearchPage = ({ search }) => (
  <div className='search-container'>
    <div>Search text: </div>
    <input type='text' id='query' />
    <button
      onClick={() => search(document.getElementById('query').value)}>
      Search Movies
    </button>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  search: (query) => dispatch(searchAndUpdateResultsAction('search', undefined, query))
})

export default connect(
  null,
  mapDispatchToProps
)(SearchPage)