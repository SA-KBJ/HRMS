import React, { Component } from "react";
import Splash from "../views/splash/Splash"
import Login from "../views/authentication/Login"
import Home from "../views/home/Home"
import Constants  from "../config/constants"
import Profile from '../views/profile/Profile';


//Start you app navigation from here
export default class App extends React.Component{
    
    constructor(props){
        super(props)
        this.state ={
            timePassed:false,
        }
    }
    
    render()
    {
        // var redirectScreen = <Splash/>

        // if(Constants.isLoggedIn){
        //     redirectScreen = <Home/>
        // }
        // else{
        //     setTimeout(() => { this.setState({ timePassed: true }) }, 3000)
        //      if(this.state.timePassed){
        //         redirectScreen = <Login/>
        //      }
        // }
        return <Profile/>
       
    }
}