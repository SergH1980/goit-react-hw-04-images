import React, { Component } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { AppStyle } from './App.styled';
import { GlobalStyle } from '../GlobalStyle';

export default class App extends Component {
  state = {
    query: ``,
  };

  handleSubmit = value => {
    if (value === this.state.query) {
      alert(`You've just searched for the same thing!!!`);
      return;
    }

    this.setState({ query: value });
  };

  render() {
    const { query } = this.state;
    return (
      <AppStyle>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery request={query} />
        <GlobalStyle />
      </AppStyle>
    );
  }
}
