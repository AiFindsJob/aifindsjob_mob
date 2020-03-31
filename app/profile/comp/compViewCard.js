/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import primary from '../../index/properties';

let w = Dimensions.get('window').width;
let m = w - 20;
export default class CompViewCard extends React.Component {
  render() {
    return (
      <View>
        <View
          style={{
            width: m,
            margin: 10,
            backgroundColor: '#fff',
            borderRadius: 9,
            height: 120,
            elevation: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 3,
            }}>
            <View style={{flex: 1}}>
              <Image
                style={{width: 50, height: 50, borderRadius: 25, margin: 5}}
                source={require('../../assets/banner.jpeg')}
              />
            </View>
            <View style={{flex: 4}}>
              <Text
                style={{
                  fontSize: 20,
                  marginTop: 3,
                  color: '#48484A',
                }}>
                F. Gheewala Human Resource Consultants
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#949494',
                }}>
                {this.props.cname}
              </Text>
            </View>
          </View>

          <View
            style={{
              width: 120,
              borderRadius: 9,
              margin: 10,
              backgroundColor: primary,
              alignSelf: 'flex-end',
            }}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontSize: 14,
                padding: 5,
              }}
              onPress={this.props.aboutCompany}>
              View details
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
