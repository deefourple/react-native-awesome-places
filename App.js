import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

import ListItem from './src/components/ListItem/ListItem';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state = {
    placeName : '',
    places : [],
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") return;

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    })
  };

  render() {

    const placesOutput = this.state.places.map((place, index) => <ListItem placeName={place} key={index} />);

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
              style={styles.inputStyle}
              value={this.state.placeName}
              placeholder="Awesome Place"
              onChangeText={this.placeNameChangeHandler}
          />
          <Button
              style={styles.buttonStyle}
              title="Add"
              onPress={this.placeSubmitHandler}
          />
        </View>
        <View style={styles.listContainer}>
          {placesOutput}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
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
  listContainer : {
    width : '100%',
    padding: 20
  }
});
