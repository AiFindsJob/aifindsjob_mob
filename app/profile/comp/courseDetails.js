/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import primary from '../../index/properties';
import {SafeAreaView} from 'react-navigation';
class CourseDetails extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{backgroundColor: '#fff', height: '100%'}}>
        <SafeAreaView>
          <ScrollView style={{height: 350, width: '100%'}} />
        </SafeAreaView>
        <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
          <View
            style={{
              height: 60,
              borderRadius: 9,
              justifyContent: 'center',
              alignSelf: 'center',
              width: 300,
              backgroundColor: primary,
              shadowRadius: 4,
              elevation: 10,
            }}
            onStartShouldSetResponder={() => {
              navigate('Payment');
            }}>
            <Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}>
              Buy course
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default CourseDetails;
