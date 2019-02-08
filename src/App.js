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

