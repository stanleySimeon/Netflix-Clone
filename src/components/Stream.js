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
        <div key={movie.id}>
          <h1 className="title">{movie.title}</h1>
          <p className="year">{movie.year}</p>
          <p className="description">{movie.description}</p>
          <img src={movie.image} alt={movie.title} />
          <p className="genre">{movie.genre}</p>
          <span className="rating">{movie.rating}</span>
          <img src={movie.thumbnail} alt={movie.title} />
          {movie.trailer}
          <p className="director">{movie.director}</p>
          <p className="writers">{movie.writers}</p>
        </div>
      ))}
    </div>
  );
}
