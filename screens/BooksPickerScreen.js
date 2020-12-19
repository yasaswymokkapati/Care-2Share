import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, TouchableOpacity } from 'react-native';
import MyHeader from '../components/AppHeader';
import db from '../config';
import firebase from 'firebase';

export default class BooksPickerScreen extends Component {
  constructor() {
    super();

    this.state = {
      books: '',
    };
  }

  updateType = (type) => {
    this.setState({ books: type });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader title="Select books Type " />
        <View style={{ marginTop: 100 }}>
          <Picker
            selectedValue={this.state.user}
            onValueChange={this.updateType}>
            <Picker.Item label="Academics" value="Academics" />
            <Picker.Item label="Non-fiction" value="Non-fiction" />
            <Picker.Item label="Biography" value="Biography" />
            <Picker.Item label="Fiction" value="Fiction" />
            <Picker.Item label="Comics" value="Comics" />
          </Picker>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Addbooks');
          }}>
          <Text style={styles.text}>{this.state.books}</Text>
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
