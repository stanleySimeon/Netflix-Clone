const SEARCH_MOVIE = 'SEARCH_MOVIE';

export const searchMovie = (query) => async (dispatch) => {
  fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
      const Searches = [];
      data.forEach((search) => {
        Searches.push({
          id: search.show.id,
          title: search.show.name,
          image: search.show.image ? search.show.image.original : search.show.image,
          summary: search.show.summary,
          rating: search.show.rating.average,
          year: search.show.premiered,
        });
      });
      dispatch({
        type: SEARCH_MOVIE,
        payload: Searches,
      });
    });
};

export const searchReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return [...state, action.payload];
    default:
      return state;
  }
};
