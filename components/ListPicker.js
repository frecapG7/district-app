import * as React from 'react';
import PropTypes from 'prop-types';
import { Picker, Text, View } from 'react-native';

export default class ListPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      selectedValue: ''
    }
    //this.handleOnValueChange = this.handleOnValueChange.bind(this);
  }

  handleOnValueChange(itemValue){
    this.setState({ selectedValue: itemValue });
    this.props.selectedValueChange(itemValue);
  }

  render() {
    if(this.props.values == undefined){
      return null;
    }
    //transform values into picker item
    let pickerItems = this.props.values.map((value, index) => {
      return <Picker.Item value={value} label={value.name} key={index} />;
    });

    return (
      <View>
        <Picker
          selectedValue={this.state.selectedValue}
          onValueChange={(itemValue, itemIndex) =>
           this.handleOnValueChange(itemValue)
          }>
          {pickerItems}
        </Picker>
      </View>
    );
  }
}

ListPicker.PropTypes = {
  selectedValue: PropTypes.object,
  selectedValueChange: PropTypes.func.isRequired
}
