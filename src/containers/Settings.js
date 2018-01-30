// @flow

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as UserActions from '../actions/user';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../Config';

class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
    tabBarLabel: 'Settings',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-settings' : 'ios-settings-outline'}
        size={Config.iconSize}
        style={{ color: tintColor }}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Tab 2</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
