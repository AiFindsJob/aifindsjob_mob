/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from './home';
import Notify from './notification';
import Service from './service';
import Elearning from './learning';
import primary from '../index/properties';
import Icon from 'react-native-vector-icons/MaterialIcons';
import User from './user';

const MainNavigators = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
        title: '',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name="home"
            size={26}
            style={{marginTop: 10, color: focused ? primary : '#9ba7b5'}}
          />
        ),
        header: null,
      }),
    },
    Service: {
      screen: Service,
      navigationOptions: ({navigation}) => ({
        title: '',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name="public"
            size={26}
            style={{marginTop: 10, color: focused ? primary : '#9ba7b5'}}
          />
        ),
        header: null,
      }),
    },

    'E-learning': {
      screen: Elearning,
      navigationOptions: ({navigation}) => ({
        title: '',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name="school"
            size={26}
            style={{marginTop: 10, color: focused ? primary : '#9ba7b5'}}
          />
        ),
        header: null,
      }),
    },
    notification: {
      screen: Notify,
      navigationOptions: ({navigation}) => ({
        title: '',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name="notifications"
            size={26}
            style={{marginTop: 10, color: focused ? primary : '#9ba7b5'}}
          />
        ),
        header: null,
      }),
    },
    user: {
      screen: User,
      navigationOptions: ({navigation}) => ({
        title: '',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name="person"
            size={26}
            style={{marginTop: 10, color: focused ? primary : '#9ba7b5'}}
          />
        ),
        header: null,
      }),
    },
  },
  {
    color: '#00ff00',
  },
);

const ProfileNavigator = createAppContainer(MainNavigators);
export default ProfileNavigator;
