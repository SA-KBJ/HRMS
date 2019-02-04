import React, { Component } from "react";
import { View,  Alert, Button,Image,TextInput,StyleSheet } from "react-native";
import HomePage from "../home/Home"
import Constants from "../../config/string"

export default class Login extends Component{

    constructor(props) {
        super(props)
        this.state = {
          email: '',
          password: '',
        }
      }
    
      componentDidMount() {
        // this.callAlert(Constants.alert_title, "Email: johndoe@gmail.com | Password: 123456", null)
      }
       
      setEmail(email) {
        this.setState({ email })
      }
    
      setPassword(password) {
        this.setState({ password })
      }
      validateData=()=>{
        if(this.state.email == '' ){
            this.callAlert(Constants.alert_title,Constants.error_email)     
        }else if(this.state.password == ''){
            this.callAlert(Constants.alert_title,Constants.error_password)
        }else{
            this.navigateToHomePage()
        }
      }
      
      callAlert(title, message, func) {
        Alert.alert(
          title, message,
          [
            { text: 'OK', onPress: () => func },
          ],
          { cancelable: false }
        )
      }
      navigateToHomePage = () => {
          <HomePage/>
      }
    
    render(){
      return(
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
           <Image source={require('../../assets/ic_salogo.png')} style={styles.image} /> 
            <TextInput style ={styles.input} placeholder ="Email" onChangeText={(text) => this.setEmail(text)}/>
            <TextInput style ={styles.input} placeholder ="Email" onChangeText={(text) => this.setPassword(text)}/>
             <Button title= "Submit" onPress={this.validateData}/> 

        </View>
      );
    }}

      const styles = StyleSheet.create({
        input: {
          height: 45,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 20,
          fontSize: 20,
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: '#FFFFFF',
        },
    image:{
        height:100,
        
    }})
   
