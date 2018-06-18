import React, { Component } from 'react'
import SearchPage from './search.search.component'
import DiscoverPage from './search.discover.component'
import FindPage from './search.find.component'
import './search.css'
import '../index.css'

class SearchSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchType: 'search'
    }
  }

  setSearchType = (searchType) => () => {
    this.setState(oldState => ({
      searchType
    }))
  }

  render() {
    const { searchType } = this.state
    const SearchType = (searchType === 'discover')
      ? DiscoverPage
      : (searchType === 'find')
        ? FindPage
        : SearchPage
    return (
      <div className='app--container'>
        <button className='search--button' onClick={this.setSearchType('search')}>Search</button>
        <button className='search--button' onClick={this.setSearchType('discover')}>Discover</button>
        <button className='search--button' onClick={this.setSearchType('find')}>Find</button>
        <SearchType />
      </div>
    )
  }
}

export default SearchSection