/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import primary from '../../index/properties';
import PasswordInputText from '../../index/passwordInput';
const h = Math.round(Dimensions.get('window').height);
import {Fonts} from '../../index/fonts';
class PasswordUpdate extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{height: h, backgroundColor: '#fff', flex: 1}}>
        <View style={{padding: 30}}>
          <Text
            style={{
              fontFamily: Fonts.Poppins,
              fontSize: 33,
              color: '#384452',
            }}>
            Reset your password
          </Text>
        </View>
        <View style={{marginLeft: 30, marginRight: 30, flex: 0, top: '8%'}}>
          <View style={{flex: 0}}>
            <PasswordInputText
              style={{paddingBottom: 5}}
              lab="Current Password"
            />
          </View>
          <View style={{marginTop: 0, flex: 0, top: 10}}>
            <PasswordInputText style={{paddingBottom: 5}} lab="New Password" />
          </View>
          <View style={{marginTop: 0, flex: 0, top: 10}}>
            <PasswordInputText style={{paddingBottom: 5}} lab="Conf Password" />
          </View>
          <View style={{flexDirection: 'column', marginTop: 40}}>
            <View
              style={{}}
              onStartShouldSetResponder={() => {
                navigate('Signin');
              }}
            />
          </View>
          <View
            style={{
              height: 60,
              borderRadius: 9,
              justifyContent: 'center',
              alignSelf: 'center',
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
            }}
            onStartShouldSetResponder={() => {
                navigate('user');
              }}>
            <Text style={{textAlign: 'center',fontFamily:Fonts.Poppins, fontSize: 20, color: 'white'}}>
              Reset
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default PasswordUpdate;
