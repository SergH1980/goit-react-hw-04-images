import React, { useState } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { AppStyle } from './App.styled';
import { GlobalStyle } from '../GlobalStyle';

export default function App() {
  const [query, setQuery] = useState(``);

  function handleSubmit(value) {
    if (value === ``) {
      alert(`Please enter search query`);
      return;
    }
    if (value === query) {
      alert(`You've just searched for the same thing!!!`);
      return;
    }

    setQuery(value);
  }

  return (
    <AppStyle>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery request={query} />
      <GlobalStyle />
    </AppStyle>
  );
}
