/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/*Page navigation */
import React from 'react';

import {Text, View, Dimensions} from 'react-native';
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
import Industry from '../profile/comp/industry';
import CompDetails from '../profile/comp/compDetails';
import Payment from '../profile/comp/payment';
import JobCat from '../profile/comp/jobCat';
import Designation from '../profile/comp/designation';
import Location from '../profile/comp/location';
import Department from '../profile/comp/department';
import ChatBot from '../profile/comp/ChatBot';
import ProfileUpdate from '../profile/comp/profileUpdate'
import ChatBotHome from '../profile/chatBot/chatBotHome';
import ContactUs from '../index/contactUs'
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
    navigationOptions: {
      headerTitle: (
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            flex: 1,
            fontFamily: 'RobotoCondensed-Regular',
          }}>
          Reset password
        </Text>
      ),
    },
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
  Industry: {
    screen: Industry,
    navigationOptions: {
      headerTitle: (
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            flex: 1,
            fontFamily: 'RobotoCondensed-Regular',
          }}>
          Industry
        </Text>
      ),
    },
  },
  JobCat: {
    screen: JobCat,
  },
  Department: {
    screen: Department,
    navigationOptions: {
      headerTitle: (
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            flex: 1,
            fontFamily: 'RobotoCondensed-Regular',
          }}>
          Department
        </Text>
      ),
    },
  },
  Designation: {
    screen: Designation,
    navigationOptions: {
      headerTitle: (
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            flex: 1,
            fontFamily: 'RobotoCondensed-Regular',
          }}>
          Designation
        </Text>
      ),
    },
  },
  Location: {
    screen: Location,
    navigationOptions: {
      headerTitle: (
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            flex: 1,
            fontFamily: 'RobotoCondensed-Regular',
          }}>
          Location
        </Text>
      ),
    },
  },
  Mia: {
    screen: ChatBot,
  },
  ChatBotHome: {
    screen: ChatBotHome,
    navigationOptions: {
      headerTitle: (
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            flex: 1,
            fontFamily: 'RobotoCondensed-Regular',
          }}>
          Mia
        </Text>
      ),
    },
  },
  ContactUs: {
    screen: ContactUs,
    navigationOptions: {
      headerTitle: (
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            flex: 1,
            fontFamily: 'RobotoCondensed-Regular',
          }}>
        </Text>
      ),
    },
  },
  ProfileUpdate: {
    screen: ProfileUpdate,
    navigationOptions: {
      headerTitle: (
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            flex: 1,
            fontFamily: 'RobotoCondensed-Regular',
          }}>
        </Text>
      ),
    },
  },
});

const Appnavigation = createAppContainer(MainNavigator);
export default Appnavigation;
