import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";
import ViewContainer from '../../components/ViewContainer';
import StatusbarBackground from '../../components/StatusbarBackground';
import _ from 'lodash';
import { firebaseRef } from '../../services/Firebase';
import { styles } from './styles';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      status: ''
    };
  }

  _login = () => {
    firebaseRef.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      // Handle errors here
      console.log(error.code)
      console.log(error.message)
    })

    Actions.pagecontrol()
  }

  _register = () => {
    Actions.register()
  }

  _onFocus = () => {

  }

  render() {
    return (
      <ViewContainer>
        <StatusbarBackground />

        <View style={styles.logo}>
          <Image source={require('../../resources/Logo.png')} />
        </View>

        <View>
          <TextInput
            style={styles.textInput}
            autoCapitalize='none'
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email}
            placeholder='EMAIL'
            placeholderTextColor='black'
            autoCorrect={false}
            onFocus={this._onFocus}
            returnKeyType='next'
            keyboardAppearance='dark'
          />
          <View style={styles.hairline} />

          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
            placeholder='PASSWORD'
            placeholderTextColor='black'
            secureTextEntry={true}
            autoCapitalize='none'
            autoCorrect={false}
            returnKeyType='done'
            keyboardAppearance='dark'
          />
          <View style={styles.hairline} />

          <View style={styles.login}>
            <TouchableOpacity style={styles.loginButton} onPress={this._login}>
              <Text style={styles.loginButtonText}>LOG IN</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.register}>
            <TouchableOpacity style={styles.registerButton} onPress={this._register}>
              <Text style={styles.registerButtonText}>create account</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ViewContainer>
    );
  }
}
