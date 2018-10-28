import React, { Component } from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { deletePlace } from '../../store/actions/index';

class PlaceDetail extends Component {
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop();
  };

  render() {
    return (
        <View style={styles.container}>
          <View>
            <Image style={styles.imageStyle} source={this.props.selectedPlace.image}/>
            <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
          </View>
          <View >
            <Button title="Delete" onPress={this.placeDeletedHandler} />
          </View>
        </View>
    )
  }
};


const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  imageStyle : {
    width: '100%',
    height: 200
  },
  placeName : {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: (key) => dispatch(deletePlace(key))
  }
}

export default connect(null, mapDispatchToProps)(PlaceDetail);
