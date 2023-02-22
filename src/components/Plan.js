/* eslint-disable react/destructuring-assignment */
import React from 'react';
import propTypes from 'prop-types';

export default function Plan(props) {
  return (
    <div>
      <h1>Plan</h1>
      <p>
        Choose your
        {' '}
        {props.plan}
      </p>
    </div>
  );
}

Plan.propTypes = {
  plan: propTypes.string.isRequired,
};
