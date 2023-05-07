import React, { Component } from 'react';
import { OnLoadButton } from './Button.styled';
import PropTypes from 'prop-types';

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };
  handleClick = () => {
    this.props.onClick();
  };

  render() {
    return <OnLoadButton onClick={this.handleClick}>Load more</OnLoadButton>;
  }
}
