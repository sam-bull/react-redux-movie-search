import React, { Component } from 'react';
import Movie from './results.component'
import './results.css'
// import { connect } from 'react-redux'
// import { updateResults } from './results.actions'
import { discoverUrl, findUrl, searchUrl } from '../api/constants'


const getUrl = (type, filter, query) => {
  console.log('getUrl')
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
class ResultsList extends Component {
  static defaultProps = {
    results: { results: [] }
  }

  validate = (response) => {
    const { status, statusText } = response
    if (status < 200) throw Error(statusText)
    if (status > 299) throw Error(statusText)
    return response.json()
  }

  onSuccess = (json) => {
    console.log('fetch success')
    this.props.updateResults(json)
  }

  failure = (error) => {
    this.setState({ movies: { error: error } })
  }

  componentDidMount = () => {
    console.log('results mount')
    const { searchType, filter, query } = this.props
    fetch(getUrl(searchType, filter, query)).then(this.validate).then(this.onSuccess).catch(this.failure)
  }

  render() {
    const { results } = this.props
    const movieList = results.results.map(movie => <Movie key={movie.id} movie={movie} />)
    const movieFail = results.error
      ? <div>{results.error.toString()}</div>
      : <div className="loader" />
    const movieData = results.results ? movieList : movieFail
    return <div>{movieData}</div >

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