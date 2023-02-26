import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../redux/reducers/moviesReducer';

export default function Stream() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies[0]) || [];

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  return (
    <div>
      <h1>Stream</h1>
      {movies.map((movie) => (
        <div key={movie.id} id={movie.id}>
          <img src={movie.poster} alt={movie.Title} />
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <p>{movie.rating}</p>
          <p>{movie.plot}</p>
        </div>
      ))}
    </div>
  );
}
