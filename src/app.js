import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  Dimensions
} from 'react-native';
import Intro from './pages/app-intro'
import { SearchBar, Button } from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

var height = Dimensions.get('window').height

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

  _renderQuestion() {
    return (
      <View style={{top: 30}}>
        <Button
          large
          iconRight
          backgroundColor={'#03a9f4'}
          borderRadius={10}
          icon={{name: 'chevron-right'}}
          title='快速提问' />
        <Button
          large
          iconRight
          borderRadius={10}
          buttonStyle={{top: 10}}
          backgroundColor={'#03a9f4'}
          icon={{name: 'chevron-right'}}
          title='快找老师' />
      </View>
    )
  }

  _renderFloatingButton() {
    return (
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
       {/* Rest of the app comes ABOVE the action button component !*/}
       <ActionButton buttonColor="rgba(231,76,60,1)">
         <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
           <Icon name="md-create" style={styles.actionButtonIcon} />
         </ActionButton.Item>
         <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
           <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
         </ActionButton.Item>
         <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
           <Icon name="md-done-all" style={styles.actionButtonIcon} />
         </ActionButton.Item>
       </ActionButton>
     </View>
    )
  }
  render() {
    return (
      <View>
        {/*this._renderAppIntro()}*/}
        {this._renderSearchBar()}
        <ScrollView style={{height: height - 200}}>
          {this._renderQuestion()}
        </ScrollView>
          {this._renderFloatingButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBarContainer: {
    top: 20
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
});

AppRegistry.registerComponent('teacherChen', () => teacherChen);
