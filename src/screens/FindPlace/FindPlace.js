import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import  { connect } from 'react-redux';

import PlaceList from '../../components/List/List';

class FindPlaceScreen extends Component {
  state = {
    placesLoaded : false,
    removeAnimation : new Animated.Value(1),
    listAnimation : new Animated.Value(0)
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    console.log(event, 'event');
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({side: "left"});
      }
    }
  };

  itemSelectedHandler = key => {
    const selectedPlace = this.props.places.find(place => place.key === key);

    this.props.navigator.push({
      screen: 'awesome-places.PlaceDetailScreen',
      title: selectedPlace.name,
      passProps: {
        selectedPlace: selectedPlace
      }
    });
  };

  placesLoadedHandler = () => {
    Animated.timing(this.state.listAnimation, {
      toValue : 1,
      duration: 1000,
      userNativeDriver: true
    }).start();
  };

  placesSearchHandler = () => {
    Animated.timing(this.state.removeAnimation, {
      toValue: 0,
      duration: 500,
      userNativeDriver: true
    }).start(() => {
      this.setState({
        placesLoaded: true
      });
      this.placesLoadedHandler();
    });
  };

  render() {
    let content =(
        <Animated.View style={{
          opacity: this.state.removeAnimation,
          transform: [
            {
              scale: this.state.removeAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [12, 1]
              })
            }
          ]
        }}>
        <TouchableOpacity onPress={this.placesSearchHandler}>
      <View style={styles.searchButton}>
        <Text style={styles.searchButtonText}>
          Find Places
        </Text>
      </View>
    </TouchableOpacity>
        </Animated.View>
          );

    if (this.state.placesLoaded) {
      content = (
          <Animated.View style={{opacity: this.state.listAnimation}}>
            <PlaceList
                places={this.props.places}
                onItemSelected={this.itemSelectedHandler}
            />
          </Animated.View>
      )
    }

    return <View style={this.state.placesLoaded ? null : styles.buttonContainer}>{content}</View>;
  }
}

const styles = StyleSheet.create({
  buttonContainer : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchButton : {
    borderColor: 'orange',
    borderWidth: 3,
    borderRadius: 50,
    padding: 20,
  },
  searchButtonText : {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 26
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

export default connect(mapStateToProps, null)(FindPlaceScreen);
