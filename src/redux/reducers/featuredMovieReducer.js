/* eslint-disable max-len */
const SAVE_FEATURED = 'SAVE_FEATURED';
const GET_FEATURED = 'GET_FEATURED';

// save the featured movie to the store
export const saveFeatured = (movie = {}) => ({
  type: SAVE_FEATURED,
  payload: movie,
});

// get the featured movie from the store
export const getFeatured = (movie = {}) => ({
  type: GET_FEATURED,
  payload: movie,
});

// reducer for featured movie
export default function featuredMovieReducer(state = [], action) {
  switch (action.type) {
    case SAVE_FEATURED:
      return action.payload;
    case GET_FEATURED:
      return action.payload;
    default:
      return state;
  }
}
