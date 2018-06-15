import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import Header from './header/header.component'
import SearchSection from './search/search.section'
import ResultsList from './results/results.container'
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