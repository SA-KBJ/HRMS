import Home from './home/Home'
import Login from './authentication/Login'
import ForgotPassword from './forgotpassword/ForgotPassword'
import Splash from './splash/Splash'
import Profile from './profile/Profile'
import NewLeave from './leave/NewLeave'
import Policy from './policy/Policy'
import Faq from './faq/Faq'
import colors from "../config/colors";

import {createDrawerNavigator,createSwitchNavigator, createStackNavigator } from "react-navigation";

const AuthStack = createStackNavigator(
    {
     Login: { screen: Login },
     ForgotPassword: { screen: ForgotPassword }
    },
     {
         headerLayoutPreset: 'center',
         headerBackTitleStyle:null,
         headerTintColor: colors.colorPrimary,
         headerTitleStyle: {
           fontWeight: 'bold',
           alignSelf:'center'
         },
     }
 );
const DrawerMainScreens = createDrawerNavigator({
    Home: {
        screen: Home,
    },
    Profile: {
        screen: Profile,
    },
    NewLeave: {
        screen: NewLeave,
    },
    Policy: {
        screen: Policy,
    },
    Faq: {
        screen: Faq,
    }
});
const AppNavigator = createSwitchNavigator({
    Splash: { screen: Splash },
    Auth: AuthStack,
    Home:DrawerMainScreens,
    Profile: { screen: Profile },

}, {
        initialRouteName: 'Splash',
        headerLayoutPreset: 'center',
       
    }
);
// ,{ 
//   headerMode: 'none' 
// }
export default AppNavigator;
