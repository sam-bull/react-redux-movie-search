import React from 'react';
import './results.css'

const imgUrl = (path) => {
  return `https://image.tmdb.org/t/p/w1280${path}`
}

const Movie = ({ movie }) => (
  <div className='moviebox' >
    <img src={imgUrl(movie.poster_path)} alt='poster' height='150' />
    <div>Title: {movie.title},
      Rating: {movie.vote_average}/10,
      Release Date: {movie.release_date}</div>
  </div>
)

export default Movie