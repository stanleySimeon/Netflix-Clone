import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie, searchMovie } from '../redux/reducers/moviesReducer';

export default function Stream() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies[0]) || [];
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  useEffect(() => {
    dispatch(searchMovie(query));
  }, [dispatch, query]);

  const handleSearch = (e) => {
    setQuery(e.target.value);

    if (e.target.value === '') {
      dispatch(getMovie());
    } else {
      dispatch(searchMovie(e.target.value));
    }

    e.preventDefault();
  };

  return (
    <div>
      <h1>Stream</h1>
      <input
        type="text"
        id="search"
        placeholder="Search for a movie"
      />
      <button
        type="button"
        onClick={(e) => handleSearch(e)}
        className="btn btn-primary"
      >
        Search
      </button>

      {
        movies.map((movie) => (
          <div key={movie.id} className="movie">
            <h2>{movie.title}</h2>
            <img src={movie.image} alt={movie.title} />
            <p>{movie.summary}</p>
            <p>{movie.rating}</p>
            <p>{movie.year}</p>
          </div>
        ))
      }
    </div>
  );
}
