import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';

import ListPicker from '../components/ListPicker';

export default class CountryPickerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
    };
  }
  countryValueChange(value) {
    console.log('country change');
    this.setState({
      country: value,
    });
    
  }

  render() {
    var countries = [
      { name: 'France', cities: [{ name: 'Paris' }, { name: 'Bordeaux' }] },
      { name: 'Japon', cities: [{ name: 'Tokyo' }, { name: 'Hokkaido' }] },
      { name: 'Canada', cities: [{ name: 'Montreal' }, { name: 'Quebec' }] },
    ];
    return (
      <View>
        <ListPicker
          values={countries}
          selectedValueChange={country => this.countryValueChange(country)}
        />
        <Button
          title="Go to City Picker"
          onPress={() =>
            this.props.navigation.navigate('CityPicker', {
              cities: this.state.country.cities,
            })
          }
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
