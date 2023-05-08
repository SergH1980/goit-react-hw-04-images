import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { apiRequest } from 'services/api';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Spinner from 'components/Loader/Loader';
import { ImageList, MessageEmpty, MessageError } from './ImageGallery.styled';

export default function ImageGallery({ request }) {
  // const [searchValue, setSearchValue] = useState(request);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(`idle`);
  const [totalPages, setTotalPages] = useState(1);

  function onLoadMore() {
    setStatus(`pending`);
    setPage(prevState => prevState + 1);
  }

  useEffect(() => {
    if (request === ``) {
      return;
    }

    setStatus(`pending`);
    setImages([]);
    setPage(1);
    const fetch = async () => {
      try {
        const searchArray = await apiRequest(request, page);
        if (searchArray.totalHits === 0) {
          return setStatus(`rejected`);
        }
        setImages(prevState => [...prevState, ...searchArray.hits]);
        setTotalPages(Math.ceil(searchArray.total / 12));
        setStatus(`resolved`);
      } catch (error) {
        this.setState({ status: `rejected` });
        console.log(error);
      }
    };
    fetch();
  }, [request]);

  useEffect(() => {
    const fetch = async () => {
      if (request === ``) {
        return;
      }

      setStatus(`pending`);
      try {
        const searchArray = await apiRequest(request, page);
        if (searchArray.totalHits === 0) {
          return setStatus(`rejected`);
        }
        setImages(prevState => [...prevState, ...searchArray.hits]);

        setTotalPages(Math.ceil(searchArray.total / 12));
        setStatus(`resolved`);
      } catch (error) {
        this.setState({ status: `rejected` });
        console.log(error);
      }
    };
    fetch();
  }, [page]);

  if (status === `idle`) {
    return <MessageEmpty>Nothing to show yet!</MessageEmpty>;
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
          <Button onClick={onLoadMore} />
        )}
      </div>
    );
  }
}

ImageGallery.propTypes = {
  request: PropTypes.string.isRequired,
};
