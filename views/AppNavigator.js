import Home from './home/Home'
import Login from './authentication/Login'
import ForgotPassword from './forgotpassword/ForgotPassword'
import Splash from './splash/Splash'
import Profile from './profile/Profile'
import MyLeave from '../views/leave/MyLeave'
import NewLeave from '../views/leave/NewLeave'
import LeaveDetails from '../views/leave/LeaveDetails'

import { createStackNavigator } from "react-navigation";


const AppNavigator = createStackNavigator({
  // Profile: { screen: Profile },
  // MyLeave:{screen: MyLeave},
  // NewLeave:{screen: NewLeave},
   LeaveDetails:{screen: LeaveDetails},

  Splash: { screen: Splash },
  Login: { screen: Login },
  Home: { screen: Home },
  ForgotPassword: { screen: ForgotPassword }
});
// ,{ 
//   headerMode: 'none' 
// }
export default AppNavigator;
