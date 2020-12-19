import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import MyHeader from './components/AppHeader';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen.js'
import FoodScreen from './screens/FoodScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import PickerScreen from './screens/FoodPickerScreen.js';
import AddFoodScreen from './screens/AddFoodScreen.js';
import ThanksFood from './screens/ThanksScreen.js';
import AddGroceriesScreen from './screens/Addgroceries.js';
import GroceriesPickerScreen from './screens/GroceriesPickerScreen.js';
import GroceriesScreen from './screens/GroceriesScreen.js';
import AddClothesScreen from './screens/Addclothes.js';
import ClothesPickerScreen from './screens/ClothesPickerScreen.js';
import ClothesScreen from './screens/ClothesScreen.js';
import AddBooksScreen from './screens/Addbooks.js';
import BooksPickerScreen from './screens/BooksPickerScreen.js';
import BooksScreen from './screens/BookScreen.js';
import AddMedicinesScreen from './screens/Addmedicines.js';
import MedicinesPickerScreen from './screens/MedicinesPickerScreen.js';
import MedicinesScreen from './screens/MedicinesScreen.js';
import Signup from './screens/Signup';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }

}
const AppNavigator = createSwitchNavigator({
  Welcome : WelcomeScreen,
  Signup : Signup,
  Home: HomeScreen,
  Food: FoodScreen,
  FoodPick: PickerScreen,
  AddFood: AddFoodScreen,
  ThanksFood: ThanksFood,
  Groceries: GroceriesScreen,
  GroceriesPickerScreen: GroceriesPickerScreen,
  Addgroceries: AddGroceriesScreen,
  Clothes: ClothesScreen,
  ClothesPickerScreen: ClothesPickerScreen,
  Addclothes: AddClothesScreen,
  Books: BooksScreen,
  BooksPickerScreen: BooksPickerScreen,
  Addbooks: AddBooksScreen,
  Medicines: MedicinesScreen,
  MedicinesPickerScreen: MedicinesPickerScreen,
  Addmedicines: AddMedicinesScreen,
});

const AppContainer = createAppContainer(AppNavigator);
