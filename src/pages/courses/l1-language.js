import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import EnglishScreen from './l2-english';
import FrenchScreen from './l2-french';
import JapaneseScreen from './l2-japanese';


var ScrollableTabView = require('react-native-scrollable-tab-view');

export default class LanguageScreen extends Component {
  render() {
    return (
      <ScrollableTabView>
        <EnglishScreen tabLabel="英语"/>
        <FrenchScreen tabLabel="日语"/>
        <JapaneseScreen tabLabel="法语"/>
      </ScrollableTabView>
    )
  }
}
