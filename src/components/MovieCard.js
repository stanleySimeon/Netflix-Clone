import React from 'react';
import PropTypes from 'prop-types';

function MovieCard({ movie }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
      <div className="relative">
        <img src={movie.image} alt={movie.title} className="rounded" />
        <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-75 transition-opacity duration-500">
          <button type="button" className="bg-red-600 py-2 px-4 rounded-md font-bold">
            Play
          </button>
        </div>
      </div>
      <p className="font-bold mt-2">{movie.title}</p>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
