import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Picker,
  TouchableOpacity,
  Alert,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/AppHeader';

export default class AddBooksScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      donorName: '',
      itemName: '',
      quantity: '',
    };
  }

  addFoodItem() {
    db.collection('Books').add({
	'donor_name' : this.state.donorName,
	'item_name' : this.state.itemName,
	'quantity' : this.state.quantity
})
  }

  render() {
    return (
      <View styles={styles.container}>
        <MyHeader title="Add Screen" />
        <TextInput
          style={styles.formTextInput}
          placeholder={'Donor name'}
          value={this.state.donorName}
          onChangeText={(text) => {
            this.setState({
              donorName: text,
            });
          }}
        />

        <TextInput
          style={styles.formTextInput}
          placeholder={'item Name'}
          value={this.state.itemName}
          onChangeText={(text) => {
            this.setState({
              itemName: text,
            });
          }}
        />

        <TextInput
          style={styles.formTextInput}
          placeholder={'Quantity'}
          value={this.state.quantity}
          onChangeText={(text) => {
            this.setState({
              quantity: text,
            });
          }}
        />
        <View style={{ marginTop: 20, marginLeft: 100 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.addFoodItem();
              this.props.navigation.navigate('ThanksFood');
            }}>
            <Text style={styles.btnText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  formTextInput: {
    width: '80%',
    height: 40,
    alignSelf: 'center',
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 4,
    marginTop: 50,
    padding: 10,
  },
  button: {
    backgroundColor: 'powderblue',
    width: 100,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    alignItems: 'center',
  },
});
