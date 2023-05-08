import React, { useEffect } from 'react';
import { Overlay, ModalImage } from './Modal.styled';
import PropTypes from 'prop-types';

export default function Modal({ onClose, children }) {
  function handleKeyDown(event) {
    if (event.code === `Escape`) {
      onClose();
    }
  }

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document
      .querySelector(`.Overlay`)
      .addEventListener(`click`, handleBackdropClick);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener(`click`, handleBackdropClick);
    };
  });

  return (
    <Overlay className="Overlay">
      <ModalImage>{children}</ModalImage>
    </Overlay>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};
