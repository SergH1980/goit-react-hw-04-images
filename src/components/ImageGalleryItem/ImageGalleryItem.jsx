import React, { Component } from 'react';
import { ImageCard, ImageCardImage } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  static propTypes = {
    alt: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  };
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { src, alt, largeImage } = this.props;
    return (
      <ImageCard onClick={this.openModal} className="gallery-item">
        <ImageCardImage src={src} alt={alt} />
        {this.state.showModal && (
          <Modal onClose={this.closeModal}>
            <img src={largeImage} alt={alt} />
          </Modal>
        )}
      </ImageCard>
    );
  }
}
