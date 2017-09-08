import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import SoftwareScreen from './l2-software';
import HardwareScreen from './l2-hardware';
import MathScreen from './l2-math';

var ScrollableTabView = require('react-native-scrollable-tab-view');

export default class ScienceScreen extends Component {
  render() {
    return (
      <ScrollableTabView>
        <SoftwareScreen tabLabel="软件计算机"/>
        <HardwareScreen tabLabel="硬件半导体"/>
        <MathScreen tabLabel="数学逻辑"/>
      </ScrollableTabView>
    )
  }
}
