/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Dimensions, ImageBackground} from 'react-native';
import primary from '../../index/properties';

let w = Dimensions.get('window').width;
let m = w - 30;
export default class ServiceCard extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground
          source={this.props.img}
          style={{
            width: m,
            alignSelf: 'center',
            elevation: 5,
            marginTop: 10,
          }}
          imageStyle={{borderRadius: 9}}>
          <View
            style={{
              width: m,
              borderRadius: 9,
              backgroundColor: '#00000050',
            }}>
            <Text style={{fontSize: 20,marginTop: -15, margin: 10, color: '#fff'}}>
              {this.props.txt}
            </Text>
            <View
              style={{
                width: 100,
                height: 40,
                margin: 10,
                alignSelf:'flex-end',
                alignItems: 'center',
                elevation:5,
                backgroundColor: primary,
                borderRadius: 5,
              }}>
              <Text style={{color: '#fff',margin:10}}>Read more</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
