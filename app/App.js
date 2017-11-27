import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Router,
  Scene
} from 'react-native-router-flux';
import Login from './scenes/Authentication/Login';
import Register from './scenes/Authentication/Register';
import Profile from './scenes/Profile';
import Discover from './scenes/Discover';
import PageControl from './scenes/PageControl/PageControl'

export default class App extends Component {
  render() {
    return (
      <Router>

        <Scene key="root">
          <Scene
          key="login"
          component={Login}
          initial={true}
          hideNavBar={true}
          />

          <Scene
          key="register"
          component={Register}
          hideNavBar={true}
          />

          <Scene
            key='pagecontrol'
            component={PageControl}
            hideNavBar={true}
          />

        </Scene>
      </Router>
    );
  }
}

