import React, { Component } from 'react';
import './results.css'
import { imgUrl } from '../api/constants'

class Movie extends Component {
  getMovieGenres = (movieGenres) => {
    const allGenres = this.props.allGenres
    const theseGenres = movieGenres.map(movieGenre => allGenres.find(genre => genre.id === movieGenre))
    const genresString = theseGenres.map(genre => genre.name).join(', ')
    return genresString
  }

  render() {
    const { movie } = this.props
    return (
      <div className='results--movie' >
        <img src={imgUrl(movie.poster_path)} alt='poster' height='150' />
        <div>Title: {movie.title}<br />
          Rating: {movie.vote_average}/10<br />
          Release Date: {movie.release_date}<br />
          Genres: {this.getMovieGenres(movie.genre_ids)}</div>
      </div>
    )
  }
}

export default Movie