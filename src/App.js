import React from 'react'
import Config from 'react-native-config'
import {createNotificationSuccess} from './actions/notificationActions'
const env = Config.ENV.toLowerCase();
const App = {
  type: 'mob',
  env: env === 'dev' ? 'development' : env,
  store: null, // we take it in prepler.jsx
  navigation: null,
  navigateTo: (url, state) => {
    if (App.navigation) {
      App.navigation.navigate(url, state)
    }
  },
  createNotification: (notification) => {
    if (App.store) {
      App.store.dispatch(createNotificationSuccess(notification))
    }
  },
  apiProcessErrorDefault: (error) => {
    if (error.response.status == 401) {
      App.navigateTo('SignIn', {error: error.response.data.error});
      return true;
    }
    if (error.response.status >= 400 && error.response.status < 500) {
      App.createNotification({type: 'error', message: error.response.data.error});
      return true;
    }
    if (error.response.status >= 500) {
      App.createNotification({type: 'error', message: 'Server Error!'});
      return true;
    }
    return false;
  }
};
export default App
