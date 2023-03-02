/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../redux/reducers/moviesReducer';
import { searchMovie } from '../redux/reducers/searchReducer';

export default function Stream() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies[0]) || [];
  const search = useSelector((state) => state.search[0]) || [];
  const [query, setQuery] = useState('');

  const updateView = () => {
    if (query === '') {
      dispatch(getMovie());
    } else {
      dispatch(searchMovie(query));
    }
  };

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

    updateView();
  };

  return (
    <div>
      <h1>Stream</h1>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleSearch}
      />
      <button
        type="button"
        onClick={handleSearch}
        className="btn btn-primary"
      >
        Search
      </button>
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
