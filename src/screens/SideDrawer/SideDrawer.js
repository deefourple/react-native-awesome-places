import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

class SideDrawer extends Component {
  render() {
    return (
        <View style={[styles.container, { width: Dimensions.get('window').width * 0.75 }]}>
          <TouchableOpacity>
            <View style={styles.drawerItem}>
              <Text>Sign Out</Text>
            </View>
          </TouchableOpacity>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 52,
    backgroundColor: "#fff",
  },
  drawerItem : {
    padding: 10,
    backgroundColor: '#eee'
  },
});

export default SideDrawer;
