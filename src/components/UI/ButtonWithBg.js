import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const ButtonWithBackground = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View
        style={[
          styles.button,
          { backgroundColor: props.color },
          props.disabled ? styles.disabled : null
        ]}
    >
      <Text style={props.disabled ? styles.disabledText : null}>{props.children}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    margin: 5,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000'
  },
  disabled: {
    backgroundColor: "#eee",
    borderColor: "#aaa"
  },
  disabledText: {
    color: "#aaa"
  }
});

export default ButtonWithBackground;
