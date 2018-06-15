const apiKey = 'cd27199b2c4374405d823b7f81c2da30'

const baseUrl = 'https://api.themoviedb.org/3'

export const discoverUrl = (filterParams, page = 1) => {
  return `${baseUrl}/discover/movie?api_key=${apiKey}&${filterParams}&page=${page}`
}

export const findUrl = (movieId) => {
  return `${baseUrl}/find/${movieId}?api_key=${apiKey}&external_source=imdb_id`
}

export const searchUrl = (searchValue, page = 1) => {
  return `${baseUrl}/search/movie?api_key=${apiKey}&query=${searchValue}&page=${page}`
}

export const genresUrl = () => {
  return `${baseUrl}/genre/movie/list?api_key=${apiKey}`
}

export const imgUrl = (path) => {
  return `https://image.tmdb.org/t/p/w1280${path}`
}