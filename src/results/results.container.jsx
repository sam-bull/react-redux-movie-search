import React, { Component } from 'react';
import Movie from './results.component'
import './results.css'
import { connect } from 'react-redux'
import { updateGenresAction, updateResultsAction } from './results.actions'
import { discoverUrl, findUrl, searchUrl, genresUrl } from '../api/constants'

const getUrl = (type, filter, query) => {
  switch (type) {
    case 'search':
      return searchUrl(query.replace(' ','+'))
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
  console.log('validate')
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

  getResults = () => {
    const { searchType, filter, query, updateResults } = this.props
    const url = getUrl(searchType, filter, query)
    console.log(url)
    fetch(url)
      .then(validate)
      .then((json) => { console.log('then'); updateResults(json) })
      .catch((error) => console.log('Error searching:', error))
  }

  searchSummary = () => {
    const { searchType, filter, query, results } = this.props
    console.log(results)
    if(!results) return ''
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
    const { query, results } = this.props

    !results && query && this.getResults()

    const movieData = query
      ? results
        ? results.results.map(movie => <Movie key={movie.id} movie={movie} />)
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