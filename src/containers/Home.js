// @flow

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../Config';

class Home extends Component {
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
    const { navigation, user } = this.props;

    return (
      <View style={styles.container}>
        <Text>{user.accessToken}</Text>
        <Button
          onPress={() => navigation.navigate('Detail')}
          title='Go to detail'
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
