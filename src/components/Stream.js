import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../redux/reducers/moviesReducer';

export default function Stream() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies) || [];

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  console.log(movies);

  return (
    <div>
      <h1>Stream</h1>
      <div>
        {
          movies.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.cast}</h2>
            </div>
          ))
        }
      </div>
    </div>
  );
}
