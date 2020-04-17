/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, Image, View, Modal, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import primary from '../../index/properties';
import {Fonts} from '../../index/fonts';
const w = Math.round(Dimensions.get('window').width);
const h = Math.round(Dimensions.get('window').height);

class ReciM extends Component {
  render() {
    return (
      <View style={{margin: 20, marginBottom: 0, flexDirection: 'row'}}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 0,
              height: 0,
              backgroundColor: 'transparent',
              borderStyle: 'solid',
              borderRightWidth: 10,
              borderBottomWidth: 20,
              borderRightColor: primary,
              borderLeftColor: 'transparent',
              borderBottomColor: 'transparent',
            }}
          />
          <View
            style={{
              borderRadius: 9,
              borderTopLeftRadius: 0,
              backgroundColor: primary,
              alignItems: 'flex-start',
            }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: Fonts.Poppins,
                fontSize: 16,
                margin: 12,
              }}>
              {this.props.mess}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default ReciM;
