import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Config from '../Config';

export default class Detail extends React.Component {
  static navigationOptions = {
    title: 'Detail',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Detail</Text>
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
