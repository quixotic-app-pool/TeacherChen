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
import Intro from '../pages/app-intro'
import { SearchBar, Button } from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import { TabNavigator, StackNavigator } from 'react-navigation';
import ExampleList from '../components/foldview/ExampleList';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

export default class MainPage extends Component {

  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: ({ tintColor }) => (
     <Image source={require('../assets/1.jpg')}/>
     
    ),
  };

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
      <View style={{height: 150}}>
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

  _renderSwiper() {
    return (
      <Swiper style={styles.wrapper} paginationStyle={{bottom: 5}}>
        <View style={styles.slide1}>
          <Image source={require('../assets/1.jpg')} style={styles.image}/>
        </View>
        <View style={styles.slide2}>
          <Image source={require('../assets/2.jpeg')} style={styles.image}/>
        </View>
        <View style={styles.slide3}>
          <Image source={require('../assets/3.jpeg')} style={styles.image}/>
        </View>
      </Swiper>
    )
  }
  render() {
    return (
      <View>
        {/*this._renderAppIntro()}*/}
        {this._renderSearchBar()}
        <ScrollView style={{top: 30, height: height}}>
          {this._renderQuestion()}
          {this._renderSwiper()}
          <ExampleList style={{top: 120}}/>
        </ScrollView>
        <View style={{bottom: 280}}>
          {this._renderFloatingButton()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBarContainer: {
    top: 0
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  wrapper: {
    height: 90
 },
 slide1: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#9DD6EB',
 },
 slide2: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#97CAE5',
 },
 slide3: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#92BBD9',
 },
 text: {
   color: '#fff',
   fontSize: 30,
   fontWeight: 'bold',
 },
 image: {
   height: 90,
   width:width,
 }
});
