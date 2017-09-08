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
import CoursesScreen from './pages/courses-screen';
import ChatScreen from './pages/chat-screen';
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
  课程: { screen: CoursesScreen },
  单聊: { screen: ChatScreen },
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

AppRegistry.registerComponent('teacherChen', () => teacherChen);
