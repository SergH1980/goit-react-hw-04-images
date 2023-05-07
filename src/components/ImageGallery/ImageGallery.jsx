import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { apiRequest } from 'services/api';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
// import { TailSpin } from 'react-loader-spinner';
import Spinner from 'components/Loader/Loader';
import { ImageList, MessageEmpty, MessageError } from './ImageGallery.styled';

export default class ImageGallery extends Component {
  static propTypes = {
    request: PropTypes.string.isRequired,
  };
  state = {
    images: [],
    page: 1,
    status: `idle`,
    totalImages: 0,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const { request } = this.props;
    if (prevProps.request !== request) {
      this.setState({ status: `pending`, images: [], page: 1 });
    }
    if (prevState.page !== page || prevProps.request !== request) {
      try {
        const searchArray = await apiRequest(request, page);
        if (searchArray.totalHits === 0) {
          return this.setState({ status: `rejected` });
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...searchArray.hits],
          totalImages: searchArray.totalHits,
          status: `resolved`,
        }));
      } catch (error) {
        this.setState({ status: `rejected` });
        console.log(error);
      }
    }
  }

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, totalImages, status, page } = this.state;
    const totalPages = Math.ceil(totalImages / 12);
    if (status === `idle`) {
      return <MessageEmpty>Nothing to show yet</MessageEmpty>;
    } else if (status === `rejected`) {
      return (
        <MessageError>
          Something went wrong. <br></br> Please try again or provide another
          search query!
        </MessageError>
      );
    } else if (status === `pending`) {
      return <Spinner />;
    } else if (status === `resolved`) {
      return (
        <div>
          <ImageList>
            {images.map(image => {
              return (
                <ImageGalleryItem
                  key={image.id}
                  src={image.webformatURL}
                  alt={image.tags}
                  largeImage={image.largeImageURL}
                />
              );
            })}
          </ImageList>
          {images.length !== 0 && page < totalPages && (
            <Button onClick={this.onLoadMore} />
          )}
        </div>
      );
    }
  }
}
<button></button>;
