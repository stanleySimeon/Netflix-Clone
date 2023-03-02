import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../redux/reducers/moviesReducer';

export default function Stream() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies[0]) || [];
  const [query, setQuery] = useState('blade runner');

  useEffect(() => {
    dispatch(getMovie(query));
  }, [query, dispatch]);

  const handleSearch = (e) => {
    setQuery(e.target.value);

    if (e.target.value === '') {
      setQuery('batman');
    } else {
      setQuery(e.target.value);
    }
  };

  return (
    <div>
      <h1>Stream</h1>
      <input
        type="text"
        id="search"
        placeholder="Search for a movie"
      />
      <button type="button" onClick={handleSearch}>Search</button>
      {
        movies.map((movie) => (
          <div key={movie.id} onChange={handleSearch}>
            <h2>{movie.title}</h2>
            <img src={movie.image} alt={movie.title} />
            <p>{movie.summary}</p>
          </div>
        ))
      }
    </div>
  );
}
