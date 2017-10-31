import React from 'react';
import { StackNavigator } from 'react-navigation';
import Root from './containers/Root';
import Detail from './containers/Detail';

const App = StackNavigator(
  {
    Root: {
      screen: Root,
    },
    Detail: {
      screen: Detail,
    }
  },
  {
    initialRouteName: 'Root',
    headerMode: '',
  }
);

export default App;
