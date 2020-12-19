import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Modal,
  KeyboardAvoidingView,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { RFValue } from 'react-native-responsive-fontsize';
import { Icon } from 'react-native-elements';

export default class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      emailID: '',
      password: '',
      isModalVisible: false,
      firstName: '',
      lastName: '',
      address: '',
      contact: '',
      confirmPassword: '',
    };
  }
  userSignup = (emailID, password) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailID, password)
        .then(() => {
          db.collection('User').add({
            'first_name': this.state.firstName,
            'last_name': this.state.lastName,
            'contact': this.state.contact,
            'address': this.state.address,
            'emailID': this.state.emailID,
          });
          return Alert.alert('User added successfully');
        });

  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.isModalVisible}>
            <View style={styles.modalContainer}>
              <ScrollView style={{ width: '100%' }}>
                <KeyboardAvoidingView style={styles.kbView}>
                  <Icon
                    type={'materialicon'}
                    name={'cancel'}
                    size={RFValue(40)}
                    onPress={() => {
                      this.setState({
                        isModalVisible: false,
                      });
                    }}
                  />
                  <Text style={styles.modalTitle}>Registration</Text>
                  <TextInput
                    style={styles.inputBox}
                    placeholder={'First Name'}
                    maxLength={10}
                    onChangeText={(text) => {
                      this.setState({
                        firstName: text,
                      });
                    }}
                  />
                  <TextInput
                    style={styles.inputBox}
                    placeholder={'Last Name'}
                    maxLength={10}
                    onChangeText={(text) => {
                      this.setState({
                        lastName: text,
                      });
                    }}
                  />
                  <TextInput
                    style={styles.inputBox}
                    placeholder={'Contact'}
                    maxLength={10}
                    keyboardType={'numeric'}
                    onChangeText={(text) => {
                      this.setState({
                        contact: text,
                      });
                    }}
                  />
                  <TextInput
                    style={styles.inputBox}
                    placeholder={'Address'}
                    multiline={true}
                    onChangeText={(text) => {
                      this.setState({
                        address: text,
                      });
                    }}
                  />
                  <TextInput
                    style={styles.inputBox}
                    placeholder={'Email ID'}
                    keyboardType={'email-address'}
                    onChangeText={(text) => {
                      this.setState({
                        emailID: text,
                      });
                    }}
                  />
                  <TextInput
                    style={styles.inputBox}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    onChangeText={(text) => {
                      this.setState({
                        password: text,
                      });
                    }}
                  />
                  <TextInput
                    style={styles.inputBox}
                    placeholder={'Confirm Passowrd'}
                    secureTextEntry={true}
                    onChangeText={(text) => {
                      this.setState({
                        confirmPassword: text,
                      });
                    }}
                  />
                  <View style={styles.modalBackButton}>
                    <TouchableOpacity
                      style={styles.registerButton}
                      onPress={() => {
                        this.userSignup(
                          this.state.emailID,
                          this.state.password,
                        );
                        this.props.navigation.navigate('Welcome')
                      }}>
                      <Text style={styles.register}>Register</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.modalBackButton}>
                    <TouchableOpacity
                      style={styles.cancelButton}
                      onPress={() => {
                        this.setState({
                          isModalVisible: false,
                        });
                      }}>
                      <Text style={styles.register}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </KeyboardAvoidingView>
              </ScrollView>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: 300,
    height: 50,
    borderBottomWidth: 1.5,
    borderColor: 'black',
    fontSize: RFValue(20),
    margin: 10,
    paddingLeft: 10,
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    borderRadius: 25,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.3,
    elevation: 16,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: RFValue(20),
  },
  modalContainer: {
    backgroundColor: 'white',
    height: '100%',
  },
  modalBackButton: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    borderRadius: 25,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.3,
    elevation: 16,
    marginBottom: 30,
  },
});
