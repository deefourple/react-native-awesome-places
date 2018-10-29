import React, { Component } from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { addPlace } from '../../store/actions/index';
import MainText from '../../components/UI/MainText';
import HeadingText from '../../components/UI/HeadingText';
import PlaceInput from '../../components/InputArea/InputArea';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

class SharePlaceScreen extends Component {
  state = {
    placeName : ''
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({side: "left"});
      }
    }
  };

  placeNameChangedHandler = val => this.setState({ placeName: val });

  placeAddedHandler = () => {
    if (this.state.placeName.trim() === '') return;

    this.props.onAddPlace(this.state.placeName);
  };

  render() {
    return (
        <ScrollView contentContainerStyle={styles.container}>

          <MainText>
            <HeadingText>Share a Place with us!</HeadingText>
          </MainText>

          <PickImage />

          <PickLocation />

          <PlaceInput
            placeName={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />

          <View style={styles.button}>
            <Button
                title="Share the Place!"
                onPress={this.placeAddedHandler}
            />
          </View>

        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center'
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName)),
  }
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
