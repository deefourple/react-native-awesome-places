import React, { Component } from 'react';
import { View, ImageBackground, Button, StyleSheet } from 'react-native'

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput';
import HeadingText from '../../components/UI/HeadingText';
import MainText from '../../components/UI/MainText';
import ButtonWithBg from '../../components/UI/ButtonWithBg';
import brickImage from '../../assets/bricks.jpg';

class AuthScreen extends Component {

  loginHandler = () => startMainTabs();

  render() {
    return (
        <View style={styles.container}>
          <ImageBackground source={brickImage} style={styles.backgroundImage}>
            <MainText>
              <HeadingText>Please Log In</HeadingText>
            </MainText>
            <ButtonWithBg
                onPress={this.loginHandler}
                color="#29aaf4"
            >
              Switch To Login
            </ButtonWithBg>
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
            <ButtonWithBg
                color="#29aaf4"
                onPress={this.loginHandler}
            >
              Submit
            </ButtonWithBg>
          </ImageBackground>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage : {
    width: '100%',
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
