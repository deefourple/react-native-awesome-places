import React from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';

const PlaceDetail = props => {
  return (
        <View style={styles.container}>
          <View>
            <Image style={styles.imageStyle} source={props.selectedPlace.image}/>
            <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
          </View>
          <View >
            <Button title="Delete" onPress={props.onItemDeleted} />
          </View>
        </View>
      )
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

export default PlaceDetail;
