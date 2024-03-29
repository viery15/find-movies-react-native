import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
// import {
//     createDrawerNavigator,
//     createStackNavigator,
//     createBottomTabNavigator,
//     createAppContainer,
// } from 'react-navigation';

import HomeScreen from './Components/Home/HomeScreen'
import SearchTabNavigator from './Components/Search/SearchTabNavigator'

const App = StackNavigator({
  HomeScreen:{
    screen: HomeScreen
  },
  SearchTabNavigator:{
    screen: SearchTabNavigator
  }
}, {
    initialRouteName: 'SearchTabNavigator'
})

export default App
