import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, TouchableOpacity } from 'react-native';
import MyHeader from '../components/AppHeader';
import db from '../config';
import firebase from 'firebase';

export default class PickerScreen extends Component {
  constructor() {
    super();

    this.state = {
      food: '',
    };
  }

  updateType = (type) => {
    this.setState({ food: type });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader title="Select Food Type " />
        <View style={{ marginTop: 100 }}>
          <Picker
            selectedValue={this.state.user}
            onValueChange={this.updateType}>
            <Picker.Item label="Veg" value="veg" />
            <Picker.Item label="non-veg" value="nonveg" />
            <Picker.Item label="continental" value="continental" />
            <Picker.Item label="Snacks" value="Snacks" />
          </Picker>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('AddFood');
          }}>
          <Text style={styles.text}>{this.state.food}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red',
  },
  button: {
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#19b5fe',
    height: 40,
    marginLeft: 50,
    marginTop: 200,
    borderRadius: 20,
    borderWidth: 2,
    padding: 10,
  },
});
