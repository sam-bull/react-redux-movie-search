import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchAction } from './search.actions'
import './search.css'

class DiscoverPage extends Component {
  render() {
    const { search } = this.props
    return (
      <div className='search-container'>
        <div>Filter by: </div>
        <select id='filter'>
          <option value="default">-select-</option>
          <option value="year">Year</option>
          <option value="with_cast">Cast</option>
          <option value="with_genres">Genre</option>
        </select>
        <input type='text' id='query' />
        {/* <br />
        <div>Sort by: </div>
        <div>
          <select id='sort_by'>
            <option value="popularity">Popularity</option>
            <option value="release_date">Release Date</option>
            <option value="revenue">Revenue</option>
            <option value="vote_average">Average votes</option>
          </select>
          <select id='sort_by_order'>
            <option value="desc">descending</option>
            <option value="asc">ascending</option>
          </select>
        </div> */}
        <br />
        <button
          onClick={() => search(document.getElementById('filter').value, document.getElementById('query'.value))}>
          Discover Movies
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  search: (filter, query) => dispatch(searchAction(filter, query))
})

export default connect(
  null,
  mapDispatchToProps
)(DiscoverPage)