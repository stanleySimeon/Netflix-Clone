import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';

const FeaturedMovie = ({ movie }) => (
  <div className="">
    <div className="w-full">
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-3xl md:text-5xl font-bold text-netflix-white mb-4">
          {movie.title}
        </h2>
        <p className="text-xl md:text-2xl text-netflix-white mb-4">
          {movie.summary}
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button type="button" className="bg-netflix-white py-2 px-4 rounded-md font-bold">
            <FontAwesomeIcon icon={faPlay} className="mr-2" />
            Play
          </button>
          <button type="button" className="bg-gray-500 text-white py-2 px-4 rounded-md font-bold">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            My List
          </button>
        </div>
      </div>
    </div>
    <div className="w-full">
      <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
    </div>
  </div>
);

FeaturedMovie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedMovie;
