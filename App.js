import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import List from './src/components/List/List'
import InputArea from './src/components/InputArea/InputArea'

type Props = {};
export default class App extends Component<Props> {

  state = {
    placeName : '',
    places : [],
  };

  placeNameChangeHandler = val => {
    this.setState({placeName: val});
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") return;

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName),
        placeName : ''
      }
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <InputArea
            placeNameChangeHandler={this.placeNameChangeHandler}
            placeSubmitHandler={this.placeSubmitHandler}
            placeName={this.state.placeName}
        />
        <List places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});
