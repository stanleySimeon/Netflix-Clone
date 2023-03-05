import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../redux/reducers/moviesReducer';
import Navigation from './Navigation';
import MovieCard from './MovieCard';

export default function Stream() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies[0]) || [];

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <h2 className="text-2xl font-bold mb-8">Popular Movies</h2>
      <div className="flex flex-wrap -mx-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
