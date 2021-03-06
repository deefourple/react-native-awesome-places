import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

const List = (props) => {

  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={info => (
        <ListItem
            placeName={info.item.name}
            placeImage={info.item.image}
            onItemPressed={() => props.onItemSelected(info.item.key.toString())}
        />
      )}
    />
  )
};

const styles = StyleSheet.create({
  listContainer : {
    width : '100%',
    padding: 20
  },
});

export default  List
