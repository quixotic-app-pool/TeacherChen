import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import EnglishScreen from './l2-liuxue-language';
import ServiceScreen from './l2-liuxue-service';

var ScrollableTabView = require('react-native-scrollable-tab-view');

export default class LiuxueScreen extends Component {
  render() {
    return (
      <ScrollableTabView>
        <EnglishScreen tabLabel="留学英语"/>
        <ServiceScreen tabLabel="留学咨询与服务"/>
      </ScrollableTabView>
    )
  }
}
