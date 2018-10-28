import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import List from './src/components/List/List';
import InputArea from './src/components/InputArea/InputArea';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from './src/store/actions/index';

type Props = {};
class App extends Component<Props> {

  placeSubmitHandler = (placeName) => {
    this.props.onAddPlace(placeName);
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  };

  placeSelectedHandler = (key) => {
    this.props.onSelectPlace(key);
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
            selectedPlace={this.props.placeSelected}
            onItemDeleted={this.placeDeletedHandler}
            onModalClosed={this.modalClosedHandler}
        />
        <InputArea onPlaceAdded={this.placeSubmitHandler} />
        <List
            places={this.props.places}
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

const mapStateToProps = state => {
  return {
    places : state.places.places,
    placeSelected : state.places.placeSelected
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
