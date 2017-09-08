import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { List, ListItem } from 'react-native-elements'

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  }
]


export default class Me extends Component {
  render() {
    return (
      <View>
      <List>
      {
        list.map((item, i) => (
          <ListItem
                key={i}
                title={item.title}
                leftIcon={{name: item.icon}}
          />
            ))
          }
      </List>
      </View>
    )
  }
}
