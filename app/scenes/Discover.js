import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ListView,
  StyleSheet
} from 'react-native';
import ViewContainer from '../components/ViewContainer';
import StatusbarBackground from '../components/StatusbarBackground';
// import ListItem from '../components/ListItem';

export default class Discover extends Component {
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this._renderRow = this._renderRow.bind(this)

    this.state = {
      dataSource: ds.cloneWithRows(players),
      players: players
    }
  }

  _renderRow(rowData: string, rowID: number) {
    <Text>
      {rowData.name}
    </Text>
  }

  render () {
    return (
      <ViewContainer>
        <StatusbarBackground />
        <Text>
          Discover View
        </Text>

      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({

})