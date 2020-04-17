/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, Image, View, TouchableOpacity, Dimensions} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import primary from '../../index/properties';
import {Fonts} from '../../index/fonts';
let w = Dimensions.get('window').width;
let m = w - 30;
class JobCat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandCard: false,
    };
  }
  render() {
    return (
      <View
        style={{
          width: w - 40,
          margin: 10,
          borderRadius: 9,
          backgroundColor: '#fff',
          elevation: 10,
          height: 230,
        }}>
        <View
          style={{
            width: w - 40,
            backgroundColor: primary,
            borderTopLeftRadius: 9,
            borderTopRightRadius: 9,
            padding: 15,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontFamily: Fonts.Poppins,
            }}>
            {this.props.header}
          </Text>
        </View>
        <View style={{height: 130, marginLeft: 10}}>
          <Text style={{fontFamily: Fonts.Poppins, fontSize: 16}}>
            {this.props.dataMap.map((data, index) => (
              <Text>
                > {data}
                {'\n'}
              </Text>
            ))}
          </Text>
        </View>
        <View>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: '#fff',
              padding: 10,
            }}>
            <Text style={{color: primary}} onPress={this.props.navigateCall}>
              View more
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default JobCat;
