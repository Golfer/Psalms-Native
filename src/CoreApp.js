import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import Psalms from './components/psalms'
import Profile from './components/profile'
import Detail from './components/detail'

const AppNavigrator = createStackNavigator({
  ScreenDashboard: {screen: Psalms},
  ScreenProfile: {screen: Profile},
  ScreenDetail: {screen: Detail},
})

class CoreApp extends React.Component {
  render() {
    return (
      <AppNavigrator/>
    )
  }
}

export default CoreApp