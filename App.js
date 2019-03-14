// In App.js in a new project

import React from "react";
import { View, Text, Button } from "react-native";
import {  createStackNavigator, createAppContainer } from "react-navigation";
import router from './config/router';


const AppNavigator = createStackNavigator(
  router,
  {
    initialRouteName: "Home"
  });
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
