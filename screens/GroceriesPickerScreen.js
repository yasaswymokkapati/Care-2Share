import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, TouchableOpacity } from 'react-native';
import MyHeader from '../components/AppHeader';
import db from '../config';
import firebase from 'firebase';

export default class GroceriesPickerScreen extends Component {
  constructor() {
    super();

    this.state = {
      groceries: '',
    };
  }

  updateType = (type) => {
    this.setState({ groceries: type });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader title="Select groceries Type " />
        <View style={{ marginTop: 100 }}>
          <Picker
            selectedValue={this.state.user}
            onValueChange={this.updateType}>
            <Picker.Item label="Pulses" value="Pulses" />
            <Picker.Item label="Cereals" value="Cereals" />
            <Picker.Item label="Spices" value="Spices" />
            <Picker.Item label="Ready to mix" value="Ready-to-mix" />
          </Picker>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Addgroceries');
          }}>
          <Text style={styles.text}>{this.state.groceries}</Text>
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
