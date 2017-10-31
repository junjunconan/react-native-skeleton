import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../Config';

export default class Home extends React.Component {
  static navigationOptions = props => {
    const { navigation } = props;

    return {
      title: 'Home',
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={Config.iconSize}
          style={{ color: tintColor }}
        />
      ),
      headerRight: (
        <Button
          onPress={() => navigation.navigate('Detail')}
          title='Detail'
        />
      )
    };
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text>Tab 1</Text>
        <Button
          onPress={() => navigation.navigate('Detail')}
          title='Go to detail'
        />
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
