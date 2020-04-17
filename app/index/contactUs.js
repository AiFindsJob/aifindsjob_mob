/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import primary from './properties';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {data} from '../profile/comp/data';
import {Fonts} from './fonts';
import {TextField, FilledTextField} from 'react-native-material-textfield';
class ContactUs extends Component {
  render() {
    const h = Dimensions.get('screen').height;

    return (
      <View
        style={{backgroundColor: '#fff', height: '100%', alignItems: 'center'}}>
        <ScrollView
          style={{height: '80%', width: '90%', paddingBottom: 10}}
          showsVerticalScrollIndicator={false}>
          <Text
            style={{
              textAlign: 'center',
              margin: 25,
              fontSize: 26,
              color: '#48484A',
              fontFamily: Fonts.Poppins,
            }}>
            Contact Us
          </Text>

          
          <View style={{width: '95%', marginLeft: '2.5%', marginRight: '2.5%'}}>
            
            <TextField style={{paddingBottom: 5}} label="Name">
              <Icon
                style={styles.icon}
                name="visibility-off"
                size={25}
                color="#222222"
              />
            </TextField>
            <TextField style={{paddingBottom: 5}} label="Email">
              <Icon
                style={styles.icon}
                name="visibility-off"
                size={25}
                color="#222222"
              />
            </TextField>
            <TextField style={{paddingBottom: 5}} label="Message" multiline>
              <Icon
                style={styles.icon}
                name="visibility-off"
                size={25}
                color="#222222"
              />
            </TextField>
          </View>
          <TouchableHighlight>
            <View
              style={{
                height: 60,
                borderRadius: 9,
                justifyContent: 'center',
                alignSelf: 'center',
                width: 300,
                backgroundColor: primary,
                shadowColor: '#00c3ee',
                margin: 30,
                elevation: 10,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: Fonts.Poppins,
                  fontSize: 22,
                  color: 'white',
                }}>
                Notify
              </Text>
            </View>
          </TouchableHighlight>
        </ScrollView>
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

export default ContactUs;
