import React, { useState } from 'react';
import { ImageCard, ImageCardImage } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ src, alt, largeImage }) {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <ImageCard onClick={openModal} className="gallery-item">
      <ImageCardImage src={src} alt={alt} />
      {showModal && (
        <Modal onClose={closeModal}>
          <img src={largeImage} alt={alt} />
        </Modal>
      )}
    </ImageCard>
  );
}

ImageGalleryItem.propTypes = {
  alt: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
