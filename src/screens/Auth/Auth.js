import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, StyleSheet } from 'react-native'

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput';
import HeadingText from '../../components/UI/HeadingText';
import MainText from '../../components/UI/MainText';
import ButtonWithBg from '../../components/UI/ButtonWithBg';
import brickImage from '../../assets/bricks.jpg';
import validate from '../../utils/validation';

class AuthScreen extends Component {

  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        },
        touched: false
      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        },
        touched: false
      },
      confirmPassword: {
        value: "",
        valid: false,
        validationRules: {
          equalTo: "password"
        },
        touched: false
      }
    }
  };

  constructor(props) {
    super(props);
  }

  loginHandler = () => startMainTabs();

  updateInputState = (key, value) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === "password") {
      connectedValue = {
        ...connectedValue,
        equalTo: value
      };
    }
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid:
                key === "password"
                    ? validate(
                    prevState.controls.confirmPassword.value,
                    prevState.controls.confirmPassword.validationRules,
                    connectedValue
                    )
                    : prevState.controls.confirmPassword.valid
          },
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(
                value,
                prevState.controls[key].validationRules,
                connectedValue
            ),
            touched: true
          }
        }
      };
    });
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
                  placeholder="Your E-Mail Address"
                  style={styles.input}
                  value={this.state.controls.email.value}
                  onChangeText={val => this.updateInputState("email", val)}
                  valid={this.state.controls.email.valid}
                  touched={this.state.controls.email.touched}
              />
              <View style={styles.passwordContainer}>
                <DefaultInput
                    placeholder="Password"
                    style={styles.input}
                    value={this.state.controls.password.value}
                    onChangeText={val => this.updateInputState("password", val)}
                    valid={this.state.controls.password.valid}
                    touched={this.state.controls.password.touched}
                />
                <DefaultInput
                    placeholder="Confirm Password"
                    style={styles.input}
                    value={this.state.controls.confirmPassword.value}
                    onChangeText={val => this.updateInputState("confirmPassword", val)}
                    valid={this.state.controls.confirmPassword.valid}
                    touched={this.state.controls.confirmPassword.touched}
                />
              </View>
            </View>
            <ButtonWithBg
                color="#29aaf4"
                onPress={this.loginHandler}
                disabled={
                  !this.state.controls.confirmPassword.valid ||
                  !this.state.controls.email.valid ||
                  !this.state.controls.password.valid
                }
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
