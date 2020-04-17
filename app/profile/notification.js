/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {View, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-navigation';
import ChatBotHome from './chatBot/chatBotHome';
import ChatBot from './comp/ChatBot';
const w = Math.round(Dimensions.get('window').width);
const h = Math.round(Dimensions.get('window').height);
class Notify extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: '#fff', height: '100%', width: w}}>
          
      </View>
    );
  }
}
export default Notify;
