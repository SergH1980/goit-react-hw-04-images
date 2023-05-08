import React from 'react';
import { OnLoadButton } from './Button.styled';
import PropTypes from 'prop-types';

export default function Button({ onClick }) {
  function handleClick() {
    onClick();
  }

  return <OnLoadButton onClick={handleClick}>Load more</OnLoadButton>;
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
