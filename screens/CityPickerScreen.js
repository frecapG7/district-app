import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import ListPicker from '../components/ListPicker';

export default class CityPickerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
    };
  }
  cityValueChange(value) {
    console.log('city change');
    this.setState({
      city: value
    });
  }

  render() {
    //const cities = this.props.values;
    const cities = this.props.navigation.getParam('cities');
    return (
      <View>
        <ListPicker
          values={cities}
          selectedValueChange={city => this.cityValueChange(city)}
        />
      </View>
    );
  }
}
