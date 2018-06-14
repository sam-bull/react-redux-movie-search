import React from 'react'
import { connect } from 'react-redux'
import { searchAction } from './search.actions'
import './search.css'

const FindPage = ({ search }) => (
  <div className='search-container'>
    <div>Find movie ID: </div>
    <input type='text' id='query' />
    <button
      onClick={() => search(document.getElementById('query').value)}>
      Find Movie
    </button>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  search: (query) => dispatch(searchAction(undefined, query))
})

export default connect(
  null,
  mapDispatchToProps
)(FindPage)