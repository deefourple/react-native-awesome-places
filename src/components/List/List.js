import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

const List = (props) => {

  const placesOutput = props.places.map((place, index) => (
      <ListItem
          placeName={place}
          key={index}
          onItemPressed={() => props.onItemDeleted(index)}
      />
  ));

  return (
    <ScrollView style={styles.listContainer}>
      {placesOutput}
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  listContainer : {
    width : '100%',
    padding: 20
  },
});

export default  List
