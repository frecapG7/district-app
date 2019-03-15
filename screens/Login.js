import * as React from 'react';
import { Text, View, StyleSheet, Button , TextInput} from 'react-native';


export default class Login extends React.Component{
  constructor(props){
    super(props);
  }



  render(){
    return(

      <View>
        //User email
        <TextInput
          autoCorrect={false}
          placeHolder='Email'
          keyboardType='email-address'
          returnKeyType="next"
        />

        <TextInput
          returnKeyType="go"
          placeHolder='Password'
          secureTextEntry
        />
      </View>

    );
  }
}
