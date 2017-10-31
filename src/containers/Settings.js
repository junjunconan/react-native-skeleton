import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../Config';

export default class Settings extends React.Component {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
