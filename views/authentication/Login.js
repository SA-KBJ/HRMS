import React, { Component } from "react";
import { View,  Alert,Text, Button,Image,TextInput,StyleSheet } from "react-native";
import HomePage from "../home/Home";
import Constants from "../../config/string";
import CommonStyle from "../../style/comman";
import CommonStrings from "../../config/string";
<<<<<<< HEAD
import {Input}  from "react-native-elements";
=======
import {Input} from "react-native-elements";

>>>>>>> commit to resolve check out issue

 class Login extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
          email: '',
          password: '',
          welcomeText : CommonStrings.str_welcome,
          pmsCredentials : CommonStrings.str_credentials,
          forgotPw : CommonStrings.str_forgotpassword

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
        <View style={CommonStyle.container}>
          
           <Image source={require('../../assets/ic_salogo.png')} style={CommonStyle.image} /> 
           <View style ={CommonStyle.verticalView}>
           <Input placeholder ="Test"></Input>
             <Text style={styles.titleText}>{this.state.welcomeText}</Text>
             <Text style={styles.smallText}>{this.state.pmsCredentials}</Text>
            {/* <Input placeholder ="hello user"/>
             */}
             {/* <Input containerStyle ={CommonStyle.input} placeholder ='Email' onChangeText={(text) => this.setEmail(text)}/>
             <Input containerStyle ={CommonStyle.input} placeholder ='Password' onChangeText={(text) => this.setPassword(text)}/> */}
             <Button title= "Submit" onPress={this.validateData}/> 
             <Text style={styles.smallText}>{this.state.forgotPw}</Text>
           </View>
        </View>
      );
    }}

    const styles = StyleSheet.create({
        titleText: {
          width:'100%',
          fontSize: 18,
          fontWeight: 'bold',
        },
        smallText: {
          width:'100%',
          fontSize: 14,
          marginBottom:5
        },
   })

   export default Login;
