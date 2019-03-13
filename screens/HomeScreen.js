import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';


export default class HomeScreen extends React.Component{
  constructor(props) {
    super(props);
  }

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
