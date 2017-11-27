import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  StatusBar
} from 'react-native';

import { styles } from './Authentication/styles';
import ViewContainer from '../components/ViewContainer';
import StatusbarBackground from '../components/StatusbarBackground';

export default class Profile extends Component {
  render () {
    return (
      <ViewContainer >
        <StatusbarBackground />

        <View style={styles.profilePicture}>
          <View style={styles.profilePictureBorder}>
            <Image source={require('../resources/img.png')} />
          </View>
        </View>

        <View style={styles.name}>
          <Text style={styles.nameText}>JESSE STAFFORD</Text>
        </View>

        <View style={styles.playersDescription}>
          <Text style={styles.playersDescriptionText}>Jesse likes playing baseball, softball, and basketball</Text>
          <Text style={styles.playersDescriptionText}>especially baseball and softball within a 10 mi radius</Text>
          <Text style={styles.playersDescriptionText}>of his home in Ahwatukee, AZ</Text>
        </View>

        <View style={styles.personalDescription}>
          <View style={styles.columnOne}>
            <Text style={styles.personalDescriptionText}>City of Birth</Text>
            <Text style={styles.personalDescriptionText}>Year of Birth</Text>
            <Text style={styles.personalDescriptionText}>Current City</Text>
          </View>
          <View style={styles.columnTwo}>
            <Text style={styles.personalDescriptionText}>Mesa, AZ</Text>
            <Text style={styles.personalDescriptionText}>August 5th, 1987</Text>
            <Text style={styles.personalDescriptionText}>Ahwatukee, AZ</Text>
          </View>
        </View>
      </ViewContainer>
    )
  }
}



