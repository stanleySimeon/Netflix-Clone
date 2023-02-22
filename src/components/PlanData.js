import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';

export default function PlanData({ props }) {
  return (
    <div className="md:w-10/12 flex flex-col items-start justify-start space-y-8 my-6">
      <span className="flex items-start space-x-2">
        <FontAwesomeIcon icon={faCheck} className="text-netflix-red text-2xl font-light" />
        <p className="text-lg font-light text-gray-600 ml-2">
          {props.commitments}
        </p>
      </span>
      <span className="flex items-start space-x-2">
        <FontAwesomeIcon icon={faCheck} className="text-netflix-red text-2xl font-light" />
        <p className="text-lg font-light text-gray-600 ml-2">
          {props.price}
        </p>
      </span>
      <span className="flex items-start space-x-2">
        <FontAwesomeIcon icon={faCheck} className="text-netflix-red text-2xl font-light" />
        <p className="text-lg font-light text-gray-600 ml-2">
          {props.device}
        </p>
      </span>
    </div>
  );
}

PlanData.propTypes = {
  props: propTypes.shape({
    commitments: propTypes.string.isRequired,
    price: propTypes.string.isRequired,
    device: propTypes.string.isRequired,
  }).isRequired,
  commitments: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
  device: propTypes.string.isRequired,
};
