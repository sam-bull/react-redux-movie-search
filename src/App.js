import React, { Component } from 'react'
import Header from './header/Header'
import SearchSection from './search/SearchSection'
import ResultsList from './results/ResultsList'
import './index.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='app'>
          <SearchSection />
          <ResultsList />
        </div>
      </div>
    )
  }
}

export default App