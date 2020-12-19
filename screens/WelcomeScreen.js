import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, Modal, KeyboardAvoidingView} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import {RFValue} from 'react-native-responsive-fontsize';
import {Icon} from 'react-native-elements';


export default class WelcomeScreen extends React.Component{
    constructor () {
        super()
        this.state = {
            emailID : '',
            password : '',
            isModalVisible : false,
            firstName : '',
            lastName : '',
            address : '',
            contact : '',
            confirmPassword : '',
        }
    }
    
    userLogin = (emailID, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailID, password)
        .then(()=>{
            return Alert.alert("User logged in"),
            this.props.navigation.navigate('Home')
        })
        .catch(error=>{
            var errorCode = error.code
            var errorMessages = error.message
            return Alert.alert(errorMessages)
        })
    }
   
  render(){
    return(
      <View style = {styles.container}>

        <Text>Hello! Welcome</Text>
        <TextInput style = {styles.inputBox}
        placeholder = {"Email ID"}
        keyboardType = 'email-address'
        onChangeText = {(text)=>{
            this.setState({
                emailID : text
            })
        }}
        value = {this.state.emailID}/>
        
        <TextInput style = {styles.inputBox}
        placeholder = {"Password"}
        secureTextEntry = {true}
        onChangeText = {(text)=>{
            this.setState({
                password : text
            })
        }}
        value = {this.state.password}/>

        <TouchableOpacity style = {[styles.button, {marginTop : 20, marginBottom : 20}]}
        onPress = {()=>{
            this.userLogin(this.state.emailID, this.state.password)
        }}><Text style = {styles.buttonText}>Login</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.button}
        onPress = {()=>{
            this.setState ({
                isModalVisible : true
            })
            this.props.navigation.navigate("Signup")
        }}><Text style = {styles.buttonText}>Signup</Text></TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox : {
      width  :300, 
      height : 50,
      borderBottomWidth : 1.5,
      borderColor : 'black',
      fontSize : RFValue(20),
      margin : 10,
      paddingLeft : 10
  },
  button : {
      width : 300,
      height : 50,
      justifyContent : 'center',
      alignItems : 'center',
      backgroundColor : 'purple',
      borderRadius : 25,
      shadowColor : 'black',
      shadowOffset : {
          width : 0,
          height : 8,
      },
      shadowOpacity : 0.30,
      shadowRadius : 10.3,
      elevation : 16
  },
  buttonText : {
      color  :'black',
      fontWeight : "bold",
      fontSize : RFValue(20)
  },
  modalContainer : {
      backgroundColor : 'white',
      height : '100%'
  },
  modalBackButton : {
    width : 300,
    height : 50,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'purple',
    borderRadius : 25,
    shadowColor : 'black',
    shadowOffset : {
        width : 0,
        height : 8,
    },
    shadowOpacity : 0.30,
    shadowRadius : 10.3,
    elevation : 16,
    marginBottom : 30
},

});
