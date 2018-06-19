import React, { Component } from 'react'
import Movie from './results.component'
import Pagination from './results.pagination'
import './results.css'
import { connect } from 'react-redux'
import { getGenresAction, updateResultsAction } from './results.actions'
// import { genresUrl } from '../api/constants'

// const validate = (response) => {
//   const { status, statusText } = response
//   if (status < 200) throw Error(statusText)
//   if (status > 299) throw Error(statusText)
//   const json = response.json()
//   return json
// }

class ResultsList extends Component {
  static defaultProps = {
    searchType: 'search'
  }

  componentDidMount = () => {
    const { genres, getGenres } = this.props
    genres || getGenres()
  }

  searchSummary = () => {
    const { searchType, filter, query, results } = this.props
    if (!results) return ''
    const start = 'You searched for:'
    switch (searchType) {
      case 'search':
        return `${start} ${query}`
      case 'discover':
        return `${start} ${filter}: ${query}`
      case 'find':
        return `${start} movie ID ${query}`
      default:
        return ''
    }
  }

  showResults = (results) => {
    return results
      ? results.map(movie => <Movie key={movie.id} movie={movie} />)
      : results.movie_results
        ? <Movie movie={results.movie_results[0]} />
        : "No movie with that ID was found."
  }

  render() {
    const { query, results, genres } = this.props
    const movieData = query
      ? results && genres
        ? this.showResults(results)
        : <div className="loader" />
      : <div></div>
    return (
      <div>
        <div className='results--searchterms'>{this.searchSummary()}</div>
        <Pagination />
        <div className='results--container'>{movieData}</div >
        <Pagination />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const props = {
    searchType: state.searchType,
    filter: state.filter,
    query: state.query,
    results: state.results,
    genres: state.genres
  }
  return props
}

const mapDispatchToProps = (dispatch) => ({
  getGenres: () => dispatch(getGenresAction()),
  updateResults: (json) => () => dispatch(updateResultsAction(json))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsList)
