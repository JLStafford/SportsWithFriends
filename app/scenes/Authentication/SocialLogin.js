import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import { firebaseRef } from '../../services/Firebase';
import { styles } from './styles';
import { Actions } from 'react-native-router-flux';
import ViewContainer from '../../components/ViewContainer';
import StatusbarBackground from '../../components/StatusbarBackground';

export default class SocialLogin extends Component {
  render() {
    return (
      <ViewContainer>
        <StatusbarBackground />

        <View style={styles.logo}>
          <Image source={require('../../resources/Logo.png')} />
        </View>

      </ViewContainer>
    )
  }
}
