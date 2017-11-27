import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";
import ViewContainer from "../../components/ViewContainer";
import StatusbarBackground from "../../components/StatusbarBackground";
import { firebaseRef } from '../../services/Firebase';
import { styles } from "./styles";
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      verifyPassword: ''
    };
  }

  _logIn = () => {
    Actions.login()
  }

  _register = () => {
    if(this.state.password === this.state.verifyPassword) {
      firebaseRef.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
        // Handle errors here
        console.log(error.code)
        console.log(error.message)
      })

      Actions.pagecontrol()
    } else {
      console.log('Passwords did not match');
    }
  }

  render() {
    return (
      <ViewContainer>
        <StatusbarBackground />

        <View style={styles.logoReg}>
          <Image source={require("../../resources/Logo.png")} />
        </View>

        <View>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email}
            placeholder="EMAIL"
            placeholderTextColor="black"
            autoCorrect={false}
            autoCapitalize='none'
            returnKeyType="next"
            keyboardAppearance="dark"
          />
          <View style={styles.hairline} />

          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
            placeholder="PASSWORD"
            placeholderTextColor="black"
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize='none'
            returnKeyType="next"
            keyboardAppearance="dark"
          />
          <View style={styles.hairline} />

          <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ verifyPassword: text })}
          value={this.state.verifyPassword}
          placeholder="VERIFY PASSWORD"
          placeholderTextColor="black"
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize='none'
          returnKeyType="done"
          keyboardAppearance="dark"
        />
        <View style={styles.hairline} />

          <View style={styles.login}>
            <TouchableOpacity style={styles.loginButton} onPress={this._register}>
              <Text style={styles.loginButtonText}>Create Account</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.register}>
            <TouchableOpacity style={styles.registerButton} onPress={this._logIn}>
              <Text style={styles.registerButtonText}>Have an Account? Login</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ViewContainer>
    );
  }
}