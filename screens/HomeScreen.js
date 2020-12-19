import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import MyHeader from '../components/AppHeader';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import FoodScreen from '../screens/FoodScreen.js';

export default class HomeScreen extends React.Component {
  food = () => {
    this.props.navigation.navigate('Food');
  };
  groceries = () => {
    this.props.navigation.navigate('Groceries');
  };
  clothes = () => {
    this.props.navigation.navigate('Clothes');
  };
  books = () => {
    this.props.navigation.navigate('Books');
  };
  medicines = () => {
    this.props.navigation.navigate('Medicines');
  };
  render() {
    return (
      <View>
        <MyHeader title="Care 2 Share" />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'yellow' }]}
          onPress={() => {
            this.food();
          }}>
          <Text
            style={{ textSize: 25, textAlign: 'center', textStyle: 'bold' }}>
            Donate Food
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'violet' }]}
          onPress={() => {
            this.groceries();
          }}>
          <Text
            style={{ textSize: 25, textAlign: 'center', textStyle: 'bold' }}>
            Donate Groceries
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#87ceeb' }]}
          onPress={() => {
            this.clothes();
          }}>
          <Text
            style={{ textSize: 25, textAlign: 'center', textStyle: 'bold' }}>
            Donate Clothes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#ffc0cb' }]}
          onPress={() => {
            this.medicines();
          }}>
          <Text
            style={{ textSize: 25, textAlign: 'center', textStyle: 'bold' }}>
            Donate Medicines
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#ffa500' }]}
          onPress={() => {
            this.books();
          }}>
          <Text
            style={{ textSize: 25, textAlign: 'center', textStyle: 'bold' }}>
            Donate Books
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const AppNavigator = createSwitchNavigator({
  Food: FoodScreen,
  Home: HomeScreen,
});

const AppContainer = createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    marginLeft: 50,
    justifyContent: 'center',
    borderRadius: 10,
    height: 30,
    width: 250,
  },
});
