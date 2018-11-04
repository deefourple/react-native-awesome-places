import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, StyleSheet } from 'react-native'

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput';
import HeadingText from '../../components/UI/HeadingText';
import MainText from '../../components/UI/MainText';
import ButtonWithBg from '../../components/UI/ButtonWithBg';
import brickImage from '../../assets/bricks.jpg';

class AuthScreen extends Component {

  state = {
    controls: {
      email : {
        value: '',
        valid: false,
        validationRules: {
          isEmail: true
        }
      },
      password : {
        value: '',
        valid: false,
        validationRules: {
          minLength: 6,
        }
      },
      confirmPassword: {
        value: '',
        valid: false,
        validationRules: {
          equalTo: 'password'
        }
      }
    }
  };

  constructor(props) {
    super(props);
  }

  loginHandler = () => startMainTabs();

  updateInputState = (key, val) => {
    this.setState(prevState => {
      return {
        controls: {
            ...prevState.controls,
          [key]: {
              ...prevState.controls[key],
              value: value
          }
        }
      }
    })
  };

  render() {
    let headingText = null;

    if (Dimensions.get('window').height < 500) {
      return (
        <MainText>
          <HeadingText>Please Log In</HeadingText>
        </MainText>
      );
    };
    return (
        <View style={styles.container}>
          <ImageBackground source={brickImage} style={styles.backgroundImage}>
            { headingText }
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
                  value={this.state.controls.email.value}
                  onChangeTextHandler={(val) => this.updateInputState('email', val)}
              />
              <View style={styles.passwordContainer}>
                <DefaultInput
                    style={[styles.input]}
                    placeholder="Password"
                />
                <DefaultInput
                    style={styles.input}
                    placeholder="Confirm Password"
                />
              </View>
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
  backgroundImage: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#eee',
    borderColor:'#bbb',
  },
  passwordContainer: {
    flexDirection:  Dimensions.get('window').height > 500 ? 'column' : 'row'
  }
});

export default AuthScreen;
