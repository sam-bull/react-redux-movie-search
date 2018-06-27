import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import Header from './header/Header'
import SearchSection from './search/SearchSection'
import ResultsList from './results/ResultsList'
import './index.css'

class App extends Component {
  // static propTypes = {
  //   searchType: PropTypes.string
  // }

  // static defaultProps = {
  //   searchType: 'search'
  // }

  render() {
    return (
      <div>
        <Header />
        <div className='app'>
          <SearchSection />
          <ResultsList/>
        </div>
      </div>
    )
  }
}

export default App