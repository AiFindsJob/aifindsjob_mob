/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import primary from '../../index/properties';

let w = Dimensions.get('window').width;
let m = w - 30;
export default class CourseCard extends React.Component {
  render() {
    return (
      <View>
        <View
          style={{
            width: m,
            margin: 15,
            backgroundColor: '#fff',
            borderRadius: 9,
            height: 100,
            elevation: 5,
          }}>
          <Text
            style={{
              fontSize: 20,
              margin: 12,
              marginLeft: 20,
              color: '#48484A',
            }}>
            {this.props.cname}
          </Text>
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
              onPress={this.props.aboutCourse}>
              Enroll
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
