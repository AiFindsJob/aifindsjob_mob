/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import ServiceCard from './comp/serviceCard';
import CompViewCard from './comp/compViewCard';
import {Fonts} from '../index/fonts';
class Service extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{backgroundColor: '#fff', height: '100%'}}>
        <ServiceCard
          img={require('../assets/banner.jpeg')}
          txt="
AI_FindsJob Is An Artificial Intelligence Seeking Job For You"
        />
        <ServiceCard
          img={require('../assets/splashImg.jpeg')}
          txt="
One Click More Job offers"
        />
      </View>
    );
  }
}
export default Service;
