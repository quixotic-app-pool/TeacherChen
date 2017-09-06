/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
var request = require('superagent');

export default class teacherChen extends Component {
  temp = null;

  componentWillMount(){
      var _that = this;
      request.get('http://127.0.0.1:3000/v1/movies.json')
      .end(function(err, res){
         _that.temp = res.text;
         console.log(res);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            Welcome
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('teacherChen', () => teacherChen);
