import React, { Component } from 'react';
import Movie from './results.component'
import './results.css'
import { connect } from 'react-redux'
import { updateGenresAction, updateResultsAction } from './results.actions'
import { genresUrl } from '../api/constants'

const validate = (response) => {
  const { status, statusText } = response
  if (status < 200) throw Error(statusText)
  if (status > 299) throw Error(statusText)
  const json = response.json()
  return json
}

class ResultsList extends Component {
  static defaultProps = {
    searchType: 'search',
    // results: { results: [] }
  }

  componentDidMount = () => {
    fetch(genresUrl())
      .then(validate)
      .then((json) => this.props.updateGenres(json))
      .catch((error) => console.log('Error getting genres:', error))
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
    return results.results 
    ? results.results.map(movie => <Movie key={movie.id} movie={movie} />) 
    : results.movie_results
    ? <Movie movie={results.movie_results[0]} />
    : "No movie with that ID was found."
  }

  render() {
    const { query, results } = this.props
    const movieData = query
      ? results
        ? this.showResults(results)
        : <div className="loader" />
      : <div></div>
    return (
      <div>
        <div className='results--searchterms'>{this.searchSummary()}</div>
        <div className='results--container'>{movieData}</div >
      </div>
    )
  }
}

// Map Redux state to component props
const mapStateToProps = (state) => {
  const props = {
    searchType: state.search.searchType,
    filter: state.search.filter,
    query: state.search.query,
    results: state.results.results
  }
  return props
}

const mapDispatchToProps = (dispatch) => ({
  updateGenres: (json) => () => dispatch(updateGenresAction(json)),
  updateResults: (json) => () => { console.log('dispatch'); dispatch(updateResultsAction(json)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsList)

// export default ResultsList