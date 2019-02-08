const { Navigation } = require('react-native-navigation');
const { registerScreens } = require('../views/screens');
import React, { Component } from "react";

//Start you app navigation from here


function start(){
Navigation.events().registerAppLaunchedListener(() => {
    registerScreens()
    Navigation.setRoot({
      root: {
        stack: {
          children: [{
            component: {
              name: "app_splash"
            }
          }]
        }
      }
    });
  });
}

 export default class App extends React.Component{
     render(){
      return (
          start()
      )

     }
    
}
// export default class App extends React.Component{
    
//     constructor(props){
//         super(props)
//         this.state ={
//             timePassed:false,
//         }
//     }
    
//     render()
//     {
//         var redirectScreen = <Splash/>

//         if(Constants.isLoggedIn){
//             redirectScreen = <Home/>
//         }
//         else{
//             setTimeout(() => { this.setState({ timePassed: true }) }, 3000)
//              if(this.state.timePassed){
//                 redirectScreen = <Login/>
//              }
//         }
//         return redirectScreen
//     }
// }
