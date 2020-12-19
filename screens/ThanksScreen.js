import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MyHeader from '../components/AppHeader';

export default class ThanksFood extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader title="Gratifying" />
        <View style={styles.container}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Thanks for your generosity
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 50,
    marginLeft: 50,
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 10,
    height: 30,
    width: 250,
    backgroundColor: '#87ceeb',
  },
});
