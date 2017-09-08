import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import Intro from './pages/app-intro'
import { SearchBar } from 'react-native-elements'


export default class teacherChen extends Component {

  someMethod(){
    Alert.alert("onChangeText!");
    return null;
  }

  _renderSearchBar() {
    return (
      <SearchBar
        round
        lightTheme
        containerStyle = {styles.searchBarContainer}
        onChangeText={ this.someMethod }
        placeholder='Type Here...' />
    )
  }

  _renderAppIntro() {
    return (
      <Intro />
    )
  }

  render() {
    return (
      <View>
        {/*{this._renderAppIntro()}*/}
        {this._renderSearchBar()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBarContainer: {
    top: 20
  }
});

AppRegistry.registerComponent('teacherChen', () => teacherChen);
