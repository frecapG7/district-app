import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';

import UserResume from '../components/UserResume';


export default class HomeScreen extends React.Component{
  constructor(props) {
    super(props);
  }

  userPressed = () => {
    this.props.navigation.navigate("Login");
  }

  render() {
    var user = { name: 'Florian' };
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <UserResume
          user={user}
          loggedIn={false}
          onPress={() => this.userPressed}
          />
        <Text>Home Screen</Text>
        <Button
          title="Go to CountryPicker"
          onPress={() => this.props.navigation.navigate('CountryPicker')}
        />
      </View>
    );
  }
}
