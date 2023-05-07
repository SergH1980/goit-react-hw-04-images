import React, { Component } from 'react';
import { Overlay, ModalImage } from './Modal.styled';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    document
      .querySelector(`.Overlay`)
      .addEventListener(`click`, this.handleBackdropClick);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === `Escape`) {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay className="Overlay">
        <ModalImage>{this.props.children}</ModalImage>
      </Overlay>
    );
  }
}
