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
import db  from '../config';
import firebase from 'firebase';
import MyHeader from '../components/AppHeader';

export default class AddFoodScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      donorName: '',
      foodName: '',
      quantity: '',
    };
  }
  addFood=()=> {
    db.collection('Food').add({
	    'donorName' : this.state.donorName,
	    'foodName' : this.state.foodName,
	    'quantity' : this.state.quantity
    });
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
          placeholder={'Food Name'}
          value={this.state.foodName}
          onChangeText={(text) => {
            this.setState({
              foodName: text,
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
              this.props.navigation.navigate('ThanksFood')
              this.addFood()
          }}>
          <Text style={styles.btnText}>Register</Text>
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
