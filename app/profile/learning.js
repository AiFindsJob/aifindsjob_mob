/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ElearningCard from './comp/elearning';

class ELearning extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: '#fff', height: '100%'}}>
        <View
          style={{
            height: 60,
            backgroundColor: '#fff',
            elevation: 5,
            width: '100%',
          }}>
          <View />
        </View>
        <ScrollView>
          <ElearningCard />
        </ScrollView>
      </View>
    );
  }
}
export default ELearning;
