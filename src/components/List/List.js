import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';


const List = (props) => {
  const func = () => {}

  const placesOutput = props.places.map((place, index) => (
      <ListItem
          placeName={place}
          key={index}
          onItemPressed={func}
      />
  ));

  return (
    <View style={styles.listContainer}>
      {placesOutput}
    </View>
  )
};

const styles = StyleSheet.create({
  listContainer : {
    width : '100%',
    padding: 20
  },
});

export default  List
