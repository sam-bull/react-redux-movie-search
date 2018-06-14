import React from 'react'
import { connect } from 'react-redux'
import { searchAndUpdateResultsAction } from './search.actions'
import './search.css'

const FindPage = ({ search }) => (
  <div className='search-container'>
    <div>Find by IMDB ID: </div>
    <input type='text' id='query' />
    <button
      onClick={() => search(document.getElementById('query').value)}>
      Find Movie
    </button>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  search: (query) => dispatch(searchAndUpdateResultsAction('find', undefined, query))
})

export default connect(
  null,
  mapDispatchToProps
)(FindPage)