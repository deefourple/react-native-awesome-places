import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';


type Props = {};
export default class List extends Component<Props> {

  render() {
    const placesOutput = this.props.places.map((place, index) => ( <ListItem placeName={place} key={index} /> ))

    return (
        <View style={styles.listContainer}>
          { placesOutput }
        </View>
    )
  }
}

const styles = StyleSheet.create({
  listContainer : {
    width : '100%',
    padding: 20
  },
});
