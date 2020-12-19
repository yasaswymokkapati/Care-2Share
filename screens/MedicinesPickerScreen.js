import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, TouchableOpacity } from 'react-native';
import MyHeader from '../components/AppHeader';
import db from '../config';
import firebase from 'firebase';

export default class MedicinesPickerScreen extends Component {
  constructor() {
    super();

    this.state = {
      medicines: '',
    };
  }

  updateType = (type) => {
    this.setState({ medicines: type });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader title="Select medicines Type " />
        <View style={{ marginTop: 100 }}>
          <Picker
            selectedValue={this.state.user}
            onValueChange={this.updateType}>
            <Picker.Item label="Tonics" value="Tonics" />
            <Picker.Item label="Tablets" value="Tablets" />
            <Picker.Item
              label="Nutritional supplements"
              value="Nutritional supplements"
            />
          </Picker>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Addmedicines');
          }}>
          <Text style={styles.text}>{this.state.medicines}</Text>
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
