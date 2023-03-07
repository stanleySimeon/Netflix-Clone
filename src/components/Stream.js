/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../redux/reducers/moviesReducer';
import { saveFeatured } from '../redux/reducers/featuredMovieReducer';
import Navigation from './Navigation';
import MovieCard from './MovieCard';
import FeaturedMovie from './FeaturedMovie';

export default function Stream() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies[0] || []);
  const featured = useSelector((state) => state.featured || null);

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  const saveFeaturedMovie = (movie) => {
    dispatch(saveFeatured(movie.id));
  };

  return (
    <>
      <Navigation />
      <div className="bg-netflix-black px-3 md:px-8">
        <h2 className="text-2xl font-bold mb-8">Popular Movies</h2>
        <div className="flex flex-wrap -mx-4 bg-white">
          {
            featured && (
              <FeaturedMovie
                movie={featured || {}}
                key={featured.id}
                title={featured.title}
              />
            )
          }
        </div>
        <div className="flex flex-wrap -mx-4" onClick={() => saveFeaturedMovie(featured)}>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </>
  );
}
