import Home from './home/Home'
import Login from './authentication/Login'
import ForgotPassword from './forgotpassword/ForgotPassword'
import Splash from './splash/Splash'
import Profile from './profile/Profile'

import { createStackNavigator } from "react-navigation";


const AppNavigator = createStackNavigator({
  Profile: { screen: Profile },
  Splash: { screen: Splash },
  Login: { screen: Login },
  Home: { screen: Home },
  ForgotPassword: { screen: ForgotPassword }
});
// ,{ 
//   headerMode: 'none' 
// }
export default AppNavigator;
