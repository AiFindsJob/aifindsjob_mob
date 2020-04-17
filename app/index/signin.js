/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  Text,
  TouchableHighlight,
} from 'react-native';
import primary from './properties';
import PasswordInputText from './passwordInput';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextField} from 'react-native-material-textfield';
import {Fonts} from './fonts';
const h = Math.round(Dimensions.get('window').height);

class SignIn extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{height: h, backgroundColor: '#fff', flex: 1}}>
        <View style={{padding: 30}}>
          <Text
            style={{
              fontFamily: Fonts.Poppins,
              fontSize: 34,
              color: '#384452',
            }}>
            Welcome back
          </Text>
        </View>
        <View style={{paddingLeft: 30, marginTop: -20}}>
          <Text
            style={{
              fontFamily: Fonts.Poppins,
              paddingTop: -25,
              fontSize: 20,
              color: '#9ba7b5',
            }}>
            Sign in to continue
          </Text>
        </View>
        <View style={{margin: 30, flex: 0, top: '6%'}}>
          <TextField style={{paddingBottom: 5}} label="Email/Phone">
            <Icon
              style={styles.icon}
              name="visibility-off"
              size={25}
              color="#222222"
            />
          </TextField>
        </View>
        <View style={{margin: 30, flex: 0}}>
          <PasswordInputText lab="Password" style={{paddingBottom: 5}} />
        </View>
        <View style={{flexDirection: 'column'}}>
          <View
            style={{}}
            onStartShouldSetResponder={() => {
              navigate('ForgetPassword');
            }}>
            <Text
              style={{
                fontFamily: Fonts.Poppins,
                fontSize: 14,
                color: '#9ba7b5',
                textAlign: 'right',
                margin: 20,
                marginTop: -10,
                flex: 0,
              }}>
              Forgot password?
            </Text>
          </View>
        </View>
        <TouchableHighlight>
          <View
            onStartShouldSetResponder={() => {
              navigate('Profile');
            }}
            style={{
              height: 60,
              borderRadius: 9,
              justifyContent: 'center',
              alignSelf: 'center',
              width: 300,
              backgroundColor: primary,
              shadowColor: '#00c3ee',
              elevation: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: Fonts.Poppins,
                fontSize: 22,
                color: 'white',
              }}>
              SIGN IN
            </Text>
          </View>
        </TouchableHighlight>
        <Text
          style={{
            fontSize: 20,
            fontFamily: Fonts.Poppins,
            color: '#9ba7b5',
            textAlign: 'center',
            margin: 20,
            flex: 0,
          }}>
          OR
        </Text>
        <TouchableHighlight>
          <View
            onStartShouldSetResponder={() => {
              navigate('Profile');
            }}
            style={{
              height: 60,
              borderRadius: 9,
              justifyContent: 'center',
              alignSelf: 'center',
              width: 300,
              backgroundColor: 'white',
              elevation: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 22,
                color: '#595959',
                padding: 10,
                fontFamily: Fonts.Poppins,
              }}>
              <Image
                source={require('../assets/G.png')}
                style={{width: 28, height: 28}}
              />
              <Text> Continue with Google</Text>
            </Text>
          </View>
        </TouchableHighlight>
        <View
          style={{marginTop: -18}}
          onStartShouldSetResponder={() => {
            navigate('CreateAccout');
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: Fonts.Poppins,
              fontSize: 14,
              margin: 20,
              padding: 10,
              color: '#9ba7b5',
            }}>
            Don't have an account?
            <Text
              style={{
                fontFamily: Fonts.Poppins,
                fontSize: 16,
                color: primary,
              }}>
              {' '}Create Now
            </Text>
          </Text>
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

export default SignIn;
