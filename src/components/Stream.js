import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../redux/reducers/moviesReducer';
import Navigation from './Navigation';

export default function Stream() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies[0]) || [];

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4" key={movie.id}>
            <div className="card mb-4 shadow-sm">
              <img src={movie.image} alt={movie.title} />
              <div className="card-body">
                <p className="card-text">{movie.title}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                  </div>
                  <small className="text-muted">{movie.year}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
