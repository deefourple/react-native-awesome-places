import React, { Component } from 'react';
import {TextInput, Button, StyleSheet, View} from 'react-native';

export default class InputArea extends Component {

  state = {
    placeName: ''
  };

  placeNameChangedHandler = val => {
    this.setState({placeName: val});
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") return;

    this.props.onPlaceAdded(this.state.placeName);
  };

render() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
          style={styles.inputStyle}
          value={this.props.placeName}
          placeholder="Some Awesome Place"
          onChangeText={this.placeNameChangedHandler}
      />
      <Button
          style={styles.buttonStyle}
          title="Add"
          onPress={this.placeSubmitHandler}
      />
    </View>
  )}
};

const styles = StyleSheet.create({
  inputContainer : {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputStyle : {
    width: '70%',
  },
  buttonStyle : {
    width: '30%',
  },
});
