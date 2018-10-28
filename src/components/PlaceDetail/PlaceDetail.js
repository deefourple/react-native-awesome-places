import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const PlaceDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent =
        (<View>
          <Image style={styles.imageStyle} source={props.selectedPlace.image}/>
          <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
        </View>);
  }
  return (
      <Modal onRequestClosed={props.onModalClosed} visible={props.selectedPlace !== null} animationType="slide" >
        <View style={styles.modalStyes}>
          {modalContent}
          <View >
            <Button title="Delete" onPress={props.onItemDeleted} />
            <Button title="Close" onPress={props.onModalClosed} />
          </View>
        </View>
      </Modal>
      )
};


const styles = StyleSheet.create({
  modalStyes: {
    margin: 50
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
