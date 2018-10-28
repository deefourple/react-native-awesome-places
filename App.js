import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import List from './src/components/List/List';
import InputArea from './src/components/InputArea/InputArea';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

import phImage from './src/assets/japan.jpg';

type Props = {};
export default class App extends Component<Props> {

  state = {
    placeName : '',
    places : [],
    placeSelected : null
  };

  placeNameChangeHandler = val => {
    this.setState({placeName: val});
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") return;

    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          name: prevState.placeName,
          key: Math.random().toString(),
          image : phImage
        }),
        placeName : '',
      }
    })
  };

  placeSelectedHandler = (key) => {
    this.setState(prevState => {
      return {
        placeSelected : prevState.places.find(place => place.key === key)
      }
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places : prevState.places.filter(place => place.key !== prevState.placeSelected.key)
      }
    });
    this.modalClosedHandler();
  };

  modalClosedHandler = () => {
    this.setState({placeSelected : null});
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
            selectedPlace={this.state.placeSelected}
            onItemDeleted={this.placeDeletedHandler}
            onModalClosed={this.modalClosedHandler}
        />
        <InputArea
            placeNameChangeHandler={this.placeNameChangeHandler}
            placeSubmitHandler={this.placeSubmitHandler}
            placeName={this.state.placeName}
        />
        <List
            places={this.state.places}
            onItemSelected={this.placeSelectedHandler}
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
