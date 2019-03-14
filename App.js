// In App.js in a new project

import React from "react";
import { View, Text, Button } from "react-native";
import {  createAppContainer } from "react-navigation";
import router from './config/router';



const AppContainer = createAppContainer(router);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
