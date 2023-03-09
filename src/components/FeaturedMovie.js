import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';

const FeaturedMovie = ({ movie }) => (
  <div className="h-screen relative">
    <div className="w-full h-full flex items-center absolute bg-gradient-to-r from-[rgba(6,6,6,0.37)] to-[rgba(0,0,0,0.55)]">
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-3xl md:text-5xl font-bold text-netflix-white mb-4">
          {movie.title}
        </h2>
        <p className="text-xl md:text-2xl text-netflix-white mb-4">
          {movie.summary.split('<p>').join('').split('</p>').join('')
            .split('<b>')
            .join('')
            .split('</b>')
            .join('')}
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
    <img src={movie.image} alt={movie.title} className="w-full object-cover" />
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
