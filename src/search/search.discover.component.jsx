import React, { Component } from 'react'
import './search.css'

class DiscoverPage extends Component {
  constructor() {
    super();
    this.state = {
      movies: {}
    }
  }

  // search = (filter, query) => {
  //   this.props.
  // }

  render() {
    const { setSearchParams } = this.props
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
        <br />
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
        </div>
        <br />
        <button
          disabled={document.getElementById('filter')}
          onClick={() => setSearchParams((document.getElementById('filter'), document.getElementById('query')))}>
          Discover Movies
        </button>
      </div>
    )
  }
}

export default DiscoverPage