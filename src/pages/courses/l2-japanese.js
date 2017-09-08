import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import ExampleList from '../../components/foldview/ExampleList';

export default class JapaneseScreen extends Component {
  render() {
    return (
      <ExampleList style={{top: 120}}/>
    )
  }
}
