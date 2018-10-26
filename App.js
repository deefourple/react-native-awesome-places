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
        places: prevState.places.concat({name: prevState.placeName, key: Math.random().toString()}),
        placeName : ''
      }
    })
  };

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places : prevState.places.filter(place => place.key !== key)
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <InputArea
            placeNameChangeHandler={this.placeNameChangeHandler}
            placeSubmitHandler={this.placeSubmitHandler}
            placeName={this.state.placeName}
        />
        <List
            places={this.state.places}
            onItemDeleted={this.placeDeletedHandler}
        />
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
