import React, {Component} from 'react';
import {
  AppRegistry,
} from 'react-native'
import {name as appName} from './app.json'

import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import rootReducers from './reducers'
import initialState from './reducers/initialState'
import CoreApp from './CoreApp'

const store = createStore(rootReducers, initialState, applyMiddleware(thunk))
CoreApp.store = store;

export default class Psalms extends React.Component {
  render() {
    return <Provider store={store}>
      <CoreApp/>
    </Provider>;
  }

}

AppRegistry.registerComponent(appName, () => Psalms);