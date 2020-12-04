import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UsersScreen from './screens/Users';
import PostsScreen from './screens/PostsScreen';
import DetailScreen from './screens/DetailScreen';
import IntroScreen from './screens/IntroScreen';

const AppNavigator = createStackNavigator({
  Intro:{
    screen: IntroScreen,
  },
  Users: {
    screen: UsersScreen,
  },
  Posts: {
    screen: PostsScreen,
  },
  Detail: {
    screen: DetailScreen,
  }
}, {
  initialRouteName: 'Intro',
})


export default createAppContainer(AppNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
