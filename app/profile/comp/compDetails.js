/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import primary from '../../index/properties';
import {SafeAreaView} from 'react-navigation';
class CompDetails extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{backgroundColor: '#fff', height: '100%'}}>
        <SafeAreaView>
          <ScrollView style={{height: 450, width: '100%'}}>
            <Text style={styles.h1}>Company Name</Text>
            <Text style={styles.h1}>Position Required</Text>
            <Text style={styles.h1}>Experience asked if any</Text>
            <Text style={styles.h1}>Personal Comment</Text>
          </ScrollView>
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
              navigate('Profile');
            }}>
            <Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}>
              Apply now
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  customSlide: {
    height: 100,
    width: 100,
  },
  h1: {
    fontSize: 20,
    margin: 10,
  },
});

export default CompDetails;
