const apiKey = 'cd27199b2c4374405d823b7f81c2da30'

const baseUrl = 'https://api.themoviedb.org/3'

export const discoverUrl = (filterParams) => {
  return `${baseUrl}/discover/movie?api_key=${apiKey}&${filterParams}`
}

export const findUrl = (movieId) => {
  return `${baseUrl}/find/${movieId}?api_key=${apiKey}&external_source=imdb_id`
}

export const searchUrl = (searchValue) => {
  return `${baseUrl}/search/movie?api_key=${apiKey}&query=${searchValue}`
}

export const genresUrl = () => {
  return `${baseUrl}/genre/movie/list?api_key=${apiKey}`
}

export const imgUrl = (path) => {
  return `https://image.tmdb.org/t/p/w1280${path}`
}