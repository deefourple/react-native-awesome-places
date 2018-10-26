import React from 'react';
import {TextInput, Button, StyleSheet, View} from 'react-native';

const InputArea = (props) => (

  <View style={styles.inputContainer}>
    <TextInput
      style={styles.inputStyle}
      value={props.placeName}
      placeholder="Some Awesome Place"
      onChangeText={props.placeNameChangeHandler}
    />
    <Button
      style={styles.buttonStyle}
      title="Add"
      onPress={props.placeSubmitHandler}
    />
  </View>

);

const styles = StyleSheet.create({
  inputContainer : {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputStyle : {
    width: '70%',
  },
  buttonStyle : {
    width: '30%',
  },
});

export default InputArea;
