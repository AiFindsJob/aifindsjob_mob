/* eslint-disable react-native/no-inline-styles */
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

class JobCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandCard: false,
    };
  }
  _expandCard = () => {
    this.setState({expandCard: !this.state.expandCard});
  };
  render() {
    return (
      <View>
        <View
          style={{
            width: m + 10,
            margin: 0,
            marginTop: 0.4,
            borderRadius: 0,
            backgroundColor: '#fff',
            elevation: 5,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              margin: 10,
              marginBottom: 0,
            }}>
            <Image
              style={{height: 60, width: 60, borderRadius: 35}}
              source={this.props.img}
            />
            <View>
              <Text
                style={{
                  fontFamily: Fonts.Poppins,
                  marginTop: 0,
                  marginRight: 10,
                  alignSelf:'flex-end',
                  fontSize: 22,
                  color: '#48484A',
                }}>
                {this.props.cname}
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.Poppins,
                  alignSelf:'flex-end',
                  marginTop: 0,
                  marginRight:10,
                  fontSize: 14,
                  color: '#48484A',
                }}>
                www.{this.props.cname}.com
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: this.state.expandCard ? 'column' : 'row',
              justifyContent: 'space-between',
              marginTop: this.state.expandCard ? 0 : -20,
              marginRight: 10,
            }}>
            {this.state.expandCard ? (
              <Details cont={this.props.cont} />
            ) : (
              <View />
            )}
            <Icon
              style={{alignSelf: 'flex-end'}}
              name={this.state.expandCard ? 'expand-less' : 'expand-more'}
              size={32}
              color="#48484A"
              onPress={this._expandCard}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default JobCard;
