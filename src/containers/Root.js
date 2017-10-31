import React from 'react';
import { TabNavigator } from 'react-navigation';
import HomeScreen from '../containers/Home';
import SettingsScreen from '../containers/Settings';

const Root = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Settings: {
      screen: SettingsScreen,
    }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

export default Root;
