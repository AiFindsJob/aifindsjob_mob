/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Image, View, Text, TouchableHighlight} from 'react-native';
import primary from './properties';
import PasswordInputText from './passwordInput';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextField} from 'react-native-material-textfield';
class ForgotPassword extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{height: 750, backgroundColor: '#fff', flex: 1}}>
        <View style={{padding: 30}}>
          <Text
            style={{
              fontFamily: 'Raleway-Medium',
              fontSize: 33,
              color: '#384452',
            }}>
            Forgot your password
          </Text>
        </View>
        <View style={{paddingLeft: 30, marginTop: -20, paddingRight: 30}}>
          <Text
            style={{
              fontFamily: 'Raleway-light',
              paddingTop: -25,
              fontSize: 20,
              color: '#9ba7b5',
            }}>
            Enter your Email/Phone and we'll sent you a link to reset your
            password
          </Text>
        </View>
        <View style={{margin: 30, flex: 0, top: '8%'}}>
          <TextField style={{paddingBottom: 5}} label="Email/Phone">
            <Icon
              style={styles.icon}
              name="visibility-off"
              size={25}
              color="#222222"
            />
          </TextField>
        </View>
        <TouchableHighlight>
          <View
            onStartShouldSetResponder={() => {
              navigate('Signin');
            }}
            style={{
              height: 60,
              borderRadius: 9,
              justifyContent: 'center',
              alignSelf: 'center',
              margin: 40,
              width: 300,
              backgroundColor: primary,
              shadowColor: '#00c3ee',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.35,
              shadowRadius: 4,
              elevation: 10,
            }}>
            <Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}>
              Sent link
            </Text>
          </View>
        </TouchableHighlight>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            fontSize: 14,
            margin: 20,
            padding: 10,
          }}>
          <Text style={{color: '#9ba7b5'}}>Not a member? </Text>
          <View
            style={{}}
            onStartShouldSetResponder={() => {
              navigate('Signin');
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                marginTop: -3,
                color: primary,
              }}>
              Sign Up
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 33,
    right: 0,
    color: '#222222',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
});

export default ForgotPassword;
