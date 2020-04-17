import React from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import primary from '../../index/properties';
import {data} from './data';
import {ScrollView} from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextField, FilledTextField} from 'react-native-material-textfield';
import {Dropdown} from 'react-native-material-dropdown';
import WorkDetails from './profileUpdate/workDetails';
import Education from './profileUpdate/education';
import PersonalInfo from './profileUpdate/personalInfo';
import {Fonts} from '../../index/fonts';
export default class ProfileUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: true,
      education: false,
      workDetails: false,
    };
  }

  render() {
    return (
      <View style={{height: '100%', backgroundColor: '#fff'}}>
        {this.state.personalInfo ? (
          <PersonalInfo
            next={() => {
              this.setState({personalInfo: false, education: true});
            }}
          />
        ) : this.state.education ? (
          <Education
            next={() => {
              this.setState({education: false, workDetails: true});
            }}
            back={() => {
              this.setState({education: false, personalInfo: true});
            }}
          />
        ) : (
          <WorkDetails
            back={() => {
              this.setState({personalInfo: false, education: true});
            }}
          />
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 33,
    right: 0,
    color: '#222222',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
});
