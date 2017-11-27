import React, { Component } from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import PageControlIOS from 'react-native-page-control';
import ViewContainer from '../../components/ViewContainer';
import StatusbarBackground from '../../components/StatusbarBackground';

export default class PageControl extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPage: 0
    }
    this._onPageControlValueChange = this._onPageControlValueChange.bind(this)
  }

  _onPageControlValueChange() {

  }

  render () {
    return (
      <ViewContainer>
        <StatusbarBackground />

        <View style={styles.pageControl}>
          <PageControlIOS
            currentPage={this.state.currentPage}
            numberOfPages={2}
            pageIndicatorTintColor='grey'
            currentPageIndicatorTintColor='black'
            onValueChange={this._onPageControlValueChange}
          />
        </View>

      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  pageControl: {

  }
})