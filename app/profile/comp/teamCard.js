import React, {Component} from 'react';
import {Text, Image, View, Dimensions} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import primary from '../../index/properties';
import {Fonts} from '../../index/fonts';
let w = Dimensions.get('window').width;
let m = w - 30;

class Details extends React.Component {
  render() {
    return (
      <View>
        <Text
          style={{
            textAlign: 'justify',
            fontFamily: Fonts.Poppins,
            margin: 10,
          }}>
          {this.props.cont}
        </Text>
      </View>
    );
  }
}

class TeamCard extends React.Component {
  render() {
    return (
      <View>
        <View
          style={{
            width: m,
            alignSelf: 'center',
            margin: 0,
            marginTop: 10,
            borderRadius: 9,
            backgroundColor: '#fff',
            elevation: 5,
            marginBottom: 10,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'column',
              margin: 10,
              marginBottom: 0,
              alignItems:'center',
              paddingBottom:20,
              paddingTop:10,
            }}>
            <Image
              style={{height: 120, width: 120, borderRadius: 100}}
              source={this.props.img}
            />
            <View>
              <Text
                style={{
                  fontFamily: Fonts.Poppins,
                  marginTop: 5,
                  marginRight: 10,
                  fontSize: 20,
                  alignSelf:'center',
                  color: '#48484A',
                }}>
                {this.props.ename}
              </Text>
              <Text
                style={{
                  fontFamily: 'RobotoCondensed-Light',
                  alignSelf:"center",
                  marginTop: 0,
                  marginRight: 10,
                  fontSize: 16,
                  color: '#48484A',
                }}>
                {this.props.epos}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default TeamCard;
