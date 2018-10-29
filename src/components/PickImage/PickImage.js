import React, { Component } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import ImagePlaceholder from "../../assets/japan.jpg";

class PickImage extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.placeHolder}>
            <Image source={ImagePlaceholder} style={styles.previewImage}/>
          </View>

          <View style={styles.button}>
            <Button title="Pick Image" onPress={() => alert('pickit')}/>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    width: '100%',
    alignItems: 'center'
  },
  placeHolder : {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#eee',
    width: '80%',
    height: 150,
  },
  button : {
    margin: 8,
  },
  previewImage : {
    width: '100%',
    height: '100%',
  }
});

export default PickImage;
