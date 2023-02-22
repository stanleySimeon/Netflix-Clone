import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../redux/reducers/userReducer';

export default function Stream() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.reducers);

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  return (
    <div>
      <h1>Stream</h1>
      <div>
        {movie.movie ? (
          <div>
            <h2>{movie.movie.title}</h2>
            <p className="movie-description">{movie.movie.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.movie.backdropPath}`} alt={movie.movie.title} />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
