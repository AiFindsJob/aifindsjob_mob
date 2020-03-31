/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import ServiceCard from './comp/serviceCard';
import CompViewCard from './comp/compViewCard';

class Service extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{backgroundColor: '#fff', height: '100%'}}>
        <CompViewCard
          cname="Eldhos"
          aboutCompany={() => {
            navigate('Company details');
          }}
        />
      </View>
    );
  }
}
export default Service;
