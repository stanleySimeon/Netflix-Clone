/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../redux/reducers/moviesReducer';
import Navigation from './Navigation';
import MovieCard from './MovieCard';
import FeaturedMovie from './FeaturedMovie';

export default function Stream() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies[0] || []);

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <div className="bg-netflix-black px-3 md:px-8">
        <h2 className="text-2xl font-bold mb-8">Popular Movies</h2>
        <div className="flex flex-wrap -mx-4">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </>
  );
}
