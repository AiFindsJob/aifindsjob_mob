/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import primary from '../index/properties';
import {data} from './comp/data';
import DocumentPicker from 'react-native-document-picker';
let h = Dimensions.get('window').height;
import {Fonts} from '../index/fonts';
class User extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{backgroundColor: '#fff', height: h, marginTop: 10}}>
        <View
          style={{
            backgroundColor: '#fff',
            minHeight: 50,
            width: '95%',
            marginLeft: '2.5%',
            marginRight: '2.5%',
            borderRadius: 9,
            elevation: 5,
            marginBottom: 20,
          }}>
          <View
            style={{backgroundColor: primary, elevation: 5, borderRadius: 9}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                marginLeft: 20,
                marginTop: 25,
                fontFamily: Fonts.Poppins,
              }}>
              {data.user.uname}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontFamily: Fonts.Poppins,
                fontSize: 15,
                margin: 20,
              }}>
              {data.user.email}
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            width: '95%',
            marginLeft: '2.5%',
            marginRight: '2.5%',
            borderRadius: 9,
          }}>
          <View
            style={{
              minHeight: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 18,
                color: '#48484A',
                margin: 10,
                marginLeft: 20,
                fontFamily: Fonts.Poppins,
              }}
              onPress={() => {
                navigate('ProfileUpdate')
              }}>
              Profile update
            </Text>
            <Icon
              style={{marginTop: 10, marginRight: 10, elevation: 30}}
              name="settings"
              onPress={() => {
                navigate('ProfileUpdate')
              }}
              size={30}
              color={primary}
            />
          </View>

          <View
            style={{
              minHeight: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 18,
                color: '#48484A',
                margin: 10,
                marginLeft: 20,
                fontFamily: Fonts.Poppins,
              }}
              onPress={() => {
                navigate('Reset password')
              }}>
              Update password!
            </Text>
            <Icon
              style={{marginTop: 10, marginRight: 10, elevation: 30}}
              name="edit"
              size={30}
              color={primary}
              onPress={() => {
                navigate('Reset password')
              }}
            />
          </View>

          <View
            style={{
              minHeight: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#48484A',
                fontSize: 18,
                fontFamily: Fonts.Poppins,
                marginLeft: 20,
                margin: 10,
              }}
              onPress={() => {
                navigate('ChatBotHome')
              }}>
              Talk to mia
            </Text>
            <Icon
              style={{marginTop: 10, marginRight: 10, elevation: 30}}
              name="chat"
              size={30}
              color={primary}
              onPress={() => {
                navigate('ChatBotHome');
              }}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            width: '95%',
            marginLeft: '2.5%',
            marginRight: '2.5%',
            borderRadius: 9,
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#48484A',
              fontFamily: Fonts.Poppins,
              fontSize: 20,
              marginLeft: 20,
              marginTop: 20,
            }}
            onStartShouldSetResponder={() => {
              navigate('Aboutus');
            }}>
            About us
          </Text>
          <Text
            style={{
              color: '#48484A',
              fontFamily: Fonts.Poppins,
              fontSize: 20,
              marginLeft: 20,
              marginTop: 20,
            }}
            onStartShouldSetResponder={() => {
              navigate('ContactUs');
            }}>
            Contact us
          </Text>
          <Text
            style={{
              color: '#48484A',
              fontSize: 25,
              fontFamily: Fonts.Poppins,
              marginLeft: 20,
              marginTop: 20,
              marginBottom: 20,
            }}
            onStartShouldSetResponder={() => {
              navigate('SplashScreen');
            }}>
            Sign out
          </Text>
        </View>
      </View>
    );
  }
}
export default User;
