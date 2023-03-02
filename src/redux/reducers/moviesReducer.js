const GET_MOVIE = 'GET_MOVIE';
const SEARCH_MOVIE = 'SEARCH_MOVIE';

export const getMovie = () => async (dispatch) => {
  fetch('https://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((data) => {
      const movies = [];
      data.forEach((movie) => {
        movies.push({
          id: movie.id,
          title: movie.name,
          image: movie.image ? movie.image.original : movie.image,
          summary: movie.summary,
          rating: movie.rating.average,
          year: movie.premiered,
        });
      });
      dispatch({
        type: GET_MOVIE,
        payload: movies,
      });
    });
};

export const searchMovie = (query) => async (dispatch) => {
  fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
      const movies = [];
      data.forEach((movie) => {
        movies.push({
          id: movie.show.id,
          title: movie.show.name,
          image: movie.show.image ? movie.show.image.original : movie.show.image,
          summary: movie.show.summary,
        });
      });
      dispatch({
        type: SEARCH_MOVIE,
        payload: query,
      });
    });
};

export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MOVIE:
      return [...state, action.payload];
    case SEARCH_MOVIE:
      return [...state, action.payload];
    default:
      return state;
  }
};
