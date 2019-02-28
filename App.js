// In App.js in a new project

import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import CountryPickerScreen from './screens/CountryPickerScreen';
import CityPickerScreen from './screens/CityPickerScreen';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to CountryPicker"
          onPress={() => this.props.navigation.navigate('CountryPicker')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  CountryPicker: CountryPickerScreen,
  CityPicker: CityPickerScreen
},
{
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
