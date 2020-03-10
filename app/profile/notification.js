/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {View, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-navigation';
const w = Math.round(Dimensions.get('window').width);
const h = Math.round(Dimensions.get('window').height);
class Notify extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: '#fff', height: h, width: w}}>
        <SafeAreaView>
          <ScrollView />
        </SafeAreaView>
      </View>
    );
  }
}
export default Notify;
