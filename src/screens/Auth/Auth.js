import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput';
import HeadingText from '../../components/UI/HeadingText';

class AuthScreen extends Component {
  loginHandler = () => startMainTabs();


  render() {
    return (
        <View style={styles.container}>
          <HeadingText>Please Log In</HeadingText>
          <Button title="Switch to Login" onPress={this.loginHandler}/>
          <View style={styles.inputContainer}>
            <DefaultInput
                style={styles.input}
                placeholder="Your E-Mail Address"
            />
            <DefaultInput
                style={[styles.input]}
                placeholder="Password"
            />
            <DefaultInput
                style={styles.input}
                placeholder="Confirm Password"
            />
          </View>
          <Button title="Submit" onPress={this.loginHandler}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer : {
    width: '80%',
  },
  input: {
    backgroundColor: '#eee',
    borderColor:'#bbb',
  }
});

export default AuthScreen;
