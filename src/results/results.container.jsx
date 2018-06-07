import React, { Component } from 'react';
import Movie from './results.component'
import './results.css'
// import { connect } from 'react-redux'
// import { updateResults } from './results.actions'
import { discoverUrl, findUrl, searchUrl, genresUrl } from '../api/constants'

const getUrl = (type, filter, query) => {
  switch (type) {
    case 'search':
      return searchUrl(query)
    case 'discover':
      const params = Array.isArray(filter) ?
        filter.map(f => `${f}=${query[filter.indexOf(f)].replace(' ', '_')}`).join('&') :
        `${filter}=${query}`
      return discoverUrl(params)
    case 'find':
      return findUrl(query);
    default:
      throw Error(`Incorrect search type: ${type} must be search, discover or find`)
  }
}

const validate = (response) => {
  const { status, statusText } = response
  if (status < 200) throw Error(statusText)
  if (status > 299) throw Error(statusText)
  const json = response.json()
  return json
}

class ResultsList extends Component {
  static defaultProps = {
    // genres: { genres: [] },
    results: { results: [] }
  }

  componentDidMount = () => {
    const { searchType, filter, query } = this.props
    fetch(getUrl(searchType, filter, query))
      .then(validate)
      .then((json) => this.props.updateResults(json))
      .catch((error) => console.log('Error searching:', error))
    fetch(genresUrl())
      .then(validate)
      .then((json) => this.props.getGenres(json))
      .catch((error) => console.log('Error getting genres:', error))
  }

  searchSummary = () => {
    const { searchType, filter, query } = this.props
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

  render() {
    const { results, genres } = this.props
    // const memoisedGetGenres = memoise(getGenres)
    const noResults = results.error
      ? <div>{results.error.toString()}</div>
      : <div className="loader" />
    const movieData = results.results && genres
      ? results.results.map(movie => <Movie key={movie.id} movie={movie} allGenres={genres.genres} />)
      : noResults
    return (
      <div>
        <div>{this.searchSummary()}</div>
        <div>{movieData}</div >
      </div>
    )
  }
}

// Map Redux actions to component props
// const mapDispatchToProps = (dispatch) => ({
//   updateResults: (movies) => dispatch(updateResults(movies))
// })

// // Map Redux state to component props
// const mapStateToProps = (state) => {
//   const props = {
//     page: state.page,
//     searchType: state.searchType,
//     filter: state.filter,
//     query: state.query,
//     results: state.results
//   }
//   return props
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ResultsList)

export default ResultsList