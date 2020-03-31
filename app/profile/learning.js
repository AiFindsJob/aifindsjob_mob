/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ElearningCard from './comp/elearning';
import CourseCard from './comp/courceCard'

class ELearning extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{backgroundColor: '#fff', height: '100%'}}>
        <ScrollView>
          <CourseCard
            cname="Interview"
            aboutCourse={() => {
              navigate('Course details');
            }}
          />
        </ScrollView>
      </View>
    );
  }
}
export default ELearning;
