/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/*Page navigation */

import SignIn from './signin';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Registration from './registration';
import SplashScreen from './splashScreen';
import ForgotPassword from './forgotPassword';
import Aboutus from '../profile/comp/about';
import ProfileNavigator from '../profile/bottomNav';
import PasswordUpdate from '../profile/comp/passwordupdate';
import CourseDetails from '../profile/comp/courseDetails';
import CompDetails from '../profile/comp/compDetails';
import Payment from '../profile/comp/payment'
const MainHome = () => {
  return <View />;
};

const MainNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Signin: {
    screen: SignIn,
    navigationOptions: {
      headerShown: false,
    },
  },
  CreateAccout: {
    screen: Registration,
    navigationOptions: {
      headerShown: false,
    },
  },
  ForgetPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      headerShown: false,
    },
  },
  Aboutus: {screen: Aboutus},
  Profile: {
    screen: ProfileNavigator,
    navigationOptions: {
      headerShown: false,
    },
  },
  'Reset password': {
    screen: PasswordUpdate,
  },
  'Course details': {
    screen: CourseDetails,
  },
  Payment: {
    screen: Payment,
  },
  'Company details': {
    screen: CompDetails,
  },
});

const Appnavigation = createAppContainer(MainNavigator);
export default Appnavigation;
