import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import LanguageScreen from './courses/l1-language';
import ScienceScreen from './courses/l1-science';
import LiuxueScreen from './courses/l1-liuxue';
import SportsScreen from './courses/l1-sports';
import OtherScreen from './courses/l1-others';


var ScrollableTabView = require('react-native-scrollable-tab-view');

export default class CoursesScreen extends Component {
  render() {
    return (
      <ScrollableTabView>
        <LanguageScreen tabLabel="外语"/>
        <ScienceScreen tabLabel="科学"/>
        <LiuxueScreen tabLabel="留学"/>
        <SportsScreen tabLabel="体育"/>
        <OtherScreen tabLabel="其他"/>
      </ScrollableTabView>
    )
  }
}
