/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Modal, Text, Dimensions, TouchableHighlight} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';

import primary, {h, w} from './properties';
import {Fonts} from './fonts';
const he = Dimensions.get('window').height;
const va = he - 30;
class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../assets/1.jpg'),
        require('../assets/2.jpg'),
        require('../assets/3.jpg'),
      ],
      showTerms: false,
    };
  }
  _showTerms = () => {
    this.setState({showTerms: true});
  };
  _hideTerms = () => {
    this.setState({showTerms: false});
  };
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{backgroundColor: '#fff', height: he}}>
        {/*Slider*/}
        <View
          style={{width: w, height: 200, backgroundColor: '#fff', margin: 0}}>
          <SliderBox
            images={this.state.images}
            height={200}
            circleLoop
            autoplay
          />
        </View>

        {/*Title*/}
        <Text
          style={{
            margin: 22,
            textAlign: 'center',
            color: '#48484A',
            fontFamily: Fonts.Poppins,
            fontSize: 23,
          }}>
          THINK GETTING THAT JOB IS OUT OF REACH? {'\n'}
          <Text
            style={{
              fontWeight: '500',
              fontSize: 27,
              fontFamily: Fonts.Poppins,
            }}>
            THINK AGAIN
          </Text>
        </Text>

        {/*Creat accout button*/}
        <TouchableHighlight>
          <View
            onStartShouldSetResponder={() => {
              navigate('CreateAccout');
            }}
            style={{
              height: 60,
              borderRadius: 9,
              justifyContent: 'center',
              alignSelf: 'center',
              width: 300,
              backgroundColor: primary,
              elevation: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 22,
                fontFamily: Fonts.Poppins,
                color: 'white',
              }}>
              CREATE ACCOUNT
            </Text>
          </View>
        </TouchableHighlight>

        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            margin: 20,
            color: '#9ba7b5',
            fontFamily: Fonts.Poppins,
          }}>
          Already have an account?
        </Text>

        {/*Sign in button*/}
        <TouchableHighlight style={{backgroundColor: '#fff'}}>
          <View
            onStartShouldSetResponder={() => {
              navigate('Signin');
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
                fontFamily: Fonts.Poppins,
                color: '#48484A',
              }}>
              SIGN IN
            </Text>
          </View>
        </TouchableHighlight>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 14,
            margin: 20,
            padding: 10,
            color: '#9ba7b5',
            fontFamily: Fonts.Poppins,
          }}>
          By creating an account,you are agreeing to our{' '}
        </Text>
        <View>
          {/*Terms and conditions click event*/}
          <View
            style={{marginTop: -20}}
            onStartShouldSetResponder={this._showTerms}>
            <Text
              style={{
                textAlign: 'center',
                color: primary,
                fontSize:14,
                fontFamily: Fonts.Poppins,
                fontWeight:'400'
              }}>
              Terms of Service
            </Text>
          </View>
        </View>

        {/*Terms and conditions*/}
        <Modal visible={this.state.showTerms} transparent={true}>
          <View
            onStartShouldSetResponder={this._hideTerms}
            style={{
              elevation: 30,
              width: w,
              height: 600,
              margin: 30,
              borderRadius: 9,
              backgroundColor: '#fff',
            }}>
            <Text style={{fontSize: 20, textAlign: 'center', margin: 30}}>
              Terms and conditions
            </Text>
            <Text style={{textAlign: 'justify', margin: 20}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
        </Modal>
      </View>
    );
  }
}

export default SplashScreen;
