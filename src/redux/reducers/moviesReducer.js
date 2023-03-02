const GET_MOVIE = 'GET_MOVIE';

export const getMovie = (query) => async (dispatch) => {
  fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
      const movies = [];
      data.forEach((movie) => {
        movies.push({
          id: movie.show.id,
          title: movie.show.name,
          image: movie.show.image ? movie.show.image.medium : 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png',
          summary: movie.show.summary,
        });
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
