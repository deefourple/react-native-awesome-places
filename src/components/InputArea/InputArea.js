import React, { Component } from 'react';

import DefaultInput from '../../components/UI/DefaultInput'

export default class InputArea extends Component {

  state = {
    placeName: ''
  };

  placeNameChangedHandler = val => {
    this.setState({placeName: val});
  };

render() {
  return (
      <DefaultInput
          placeholder="Place Name"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
      />
  )}
};
