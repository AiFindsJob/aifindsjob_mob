/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import ServiceCard from './comp/serviceCard';

class Service extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: '#fff', height: '100%'}}>
        <ServiceCard />
      </View>
    );
  }
}
export default Service;