import React from 'react'
import { connect } from 'react-redux'
import { setSearchTypeAction } from './search.actions'
import SearchPage from './search.search.component'
import DiscoverPage from './search.discover.component'
import FindPage from './search.find.component'
import './search.css'
import '../index.css'

const SearchSection = ({ searchType, setSearchType }) => {
  const SearchType = (searchType === 'discover')
    ? DiscoverPage
    : (searchType === 'find')
      ? FindPage
      : SearchPage
  return (
    <div className='container'>
      <button className='search--button' onClick={setSearchType('search')}>Search</button>
      <button className='search--button' onClick={setSearchType('discover')}>Discover</button>
      <button className='search--button' onClick={setSearchType('find')}>Find</button>
      <SearchType />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setSearchType: (searchType) => () => dispatch(setSearchTypeAction(searchType))
})

const mapStateToProps = (state) => {
  const props = {
    searchType: state.search.searchType
  }
  return props
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchSection)