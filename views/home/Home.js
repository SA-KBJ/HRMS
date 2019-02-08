import React, { Component } from "react";
import { View, Alert, Text, Image, StyleSheet } from "react-native";

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
      };
render(){
    return(
        <View style>
            <Text style ={fontSize= 18 } >Home Screen</Text>
        </View>
    );
   
}

}
