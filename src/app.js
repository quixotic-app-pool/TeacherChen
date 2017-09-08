import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Alert,
  ScrollView,
  Dimensions
} from 'react-native';
import { SearchBar, Button } from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Intro from './pages/app-intro';
import ExampleList from './components/foldview/ExampleList';
import MainPage from './pages/main-page';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Me from './pages/me';


var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;


export default class DefaultScreen extends Component {

  render() {
    return (
      <MainPage />
    );
  }
}


const MainScreenNavigator = TabNavigator({
  首页: { screen: DefaultScreen },
  Page2: { screen: Page2 },
  Page2: { screen: Page2 },
  我的: { screen: Me }
}, {
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 15,
      bottom: 15
    },
  },
}
);

const teacherChen = StackNavigator({
  Home: { screen: MainScreenNavigator }
});

MainScreenNavigator.navigationOptions = {
  title: '陈老师',
};


const styles = StyleSheet.create({
  searchBarContainer: {
    top: 20
  }
});

AppRegistry.registerComponent('teacherChen', () => teacherChen);
