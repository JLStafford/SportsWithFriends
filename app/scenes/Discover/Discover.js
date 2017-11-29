import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ListView,
  StyleSheet
} from 'react-native';
import ViewContainer from '../../components/ViewContainer';
import StatusbarBackground from '../../components/StatusbarBackground';
import ListItems from '../../components/ListItems';
import DiscoverListItem from './DiscoverListItem';
import { fetchUserData } from '../../services/Firebase';

export default class Discover extends Component {
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      userData: {}
    }
  }

    componentDidMount() {
      fetchUserData()
    }

  _renderRow = (rowData) => {
    return (
      <DiscoverListItem name='Jesse Stafford' sports='baseball, softball, basketball' city='Phoenix, AZ'/>
    )
  }

  render () {
    return (
      <ViewContainer>
        <StatusbarBackground />
        <View style={styles.discoverContainer}>
          <Text>These people are ready to play</Text>
          <Text>go out, meet new people, play some sports</Text>
          <Text>and have some fun!</Text>
        </View>
        <ListItem
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />

      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  discoverContainer: {
    alignItems: 'center'
  }
})