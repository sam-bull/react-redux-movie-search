import React, { Component } from 'react';
import './results.css'
import '../index.css'
import { imgUrl } from '../api/constants'

class Movie extends Component {
  // getMovieGenres = (movieGenres) => {
  //   const allGenres = this.props.allGenres
  //   const theseGenres = movieGenres.map(movieGenre => allGenres.find(genre => genre.id === movieGenre))
  //   const genresString = theseGenres.map(genre => genre.name).join(', ')
  //   return genresString
  // }

  render() {
    const { movie } = this.props
    return (
      <div className='container results--movie' >
        <img src={imgUrl(movie.poster_path)} alt='poster' height='150' />
        <div className='reults--movie-description'>
          <div className='results--movie-title'>{movie.title}</div>
          {/* <div className='results--movie-genres'>{this.getMovieGenres(movie.genre_ids)}</div> */}
          <div className='results--movie-rating'>{movie.vote_average} / 10</div>
        </div>
      </div>
    )
  }
}

export default Movie