import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';

export default class UserResume extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if (this.props.loggedIn) {
    return (
      <View>
        <Text>Hello {this.props.user.name}</Text>
      </View>
    );
  }
  return (
    <View>
      <TouchableHighlight
        onPress={this.props.onPress}>
            <Text>Login</Text>
        </TouchableHighlight>
    </View>
  );
  }
}
