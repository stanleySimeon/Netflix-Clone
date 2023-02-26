const GET_MOVIE = 'GET_MOVIE';

export const getMovie = () => async (dispatch) => {
  fetch('http://www.omdbapi.com/?i=tt3896198&apikey=a0e2a2d4')
    .then((response) => response.json())
    .then((data) => {
      const movies = [];
      console.log(data);
      movies.push({
        id: data.imdbID,
        title: data.Title,
        rating: data.imdbRating,
        poster: data.Poster,
        plot: data.Plot,
        year: data.Year,
      });
      dispatch({
        type: GET_MOVIE,
        payload: movies,
      });
    });
};

export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MOVIE:
      return [...state, action.payload];
    default:
      return state;
  }
};
