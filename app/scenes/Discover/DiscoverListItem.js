import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';

import ViewContainer from '../../components/ViewContainer';
import StatusbarBackground from '../../components/StatusbarBackground';

import _ from 'lodash';

const win = Dimensions.get('window')

export default class DiscoverListItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPage: 0,
      height: win.height
    }
  }

  _onScroll = ({nativeEvent}) => {
    let currentPage = Math.round(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.height);

    if(this.state.currentPage !== currentPage) {
      this.setState({currentPage});
    }
  }

  render () {
    return (
      <ViewContainer>
        <StatusbarBackground />

        <ScrollView
          horizontal={false}
          ref='ScrollView'
          onScroll={this._onScroll}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.listContainer}>
            <Image style={styles.listImage} source={require('../../resources/img.png')} />
            <View style={styles.listInformation}>
              <Text>{_.upperCase('Jesse Stafford')}</Text>
              <Text>{_.upperCase('Plays baseball, softball, and basketball')}</Text>
            </View>
          </View>
        </ScrollView>
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center'
  },
  listImage: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderColor: '#2C0F66',
    borderRadius: 30,
    overflow: 'hidden'
  },
  listInformation: {

  }
})

