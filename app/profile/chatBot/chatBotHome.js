/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, Image, View, Modal, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import primary from '../../index/properties';
import SentM from './sentM';
import ReciM from './reciM';
import {TextInput} from 'react-native-paper';
import {Fonts} from '../../index/fonts'
const w = Math.round(Dimensions.get('window').width);
const h = Math.round(Dimensions.get('window').height);

class ChatBotHome extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flex: 0,
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between',
            backgroundColor: '#fff',
          }}>
          {/*Messages*/}
          <ScrollView>
            {/*mess is props for message
                    <ReciM/> for responts
                    <SentM/> for query
               */}
            <ReciM mess="Hi,How can i help you" />
            <SentM mess="hello" />
          </ScrollView>

          {/*messageinputs*/}
          <View
            style={{
              height: 70,
              backgroundColor: '#fff',
              flexDirection: 'row',
              elevation: 10,
            }}>
            {/*Message input*/}
            <View
              style={{
                borderWidth: 0.5,
                margin: 10,
                backgroundColor: '#fff',
                borderColor: primary,
                padding: 3,
                width: '80%',
                borderRadius: 20,
              }}>
              <TextInput
                backgroundColor="#fff"
                placeholder="type message"
                fontFamily={Fonts.Poppins}
                style={{
                  width: '95%',
                  fontFamily: Fonts.Poppins,
                  height: 35,
                  marginLeft: 5,
                  fontSize: 20,
                }}
              />
            </View>

            {/*Message sent button*/}
            <Icon
              style={{margin: 15, alignSelf: 'flex-end', marginLeft: 10}}
              name="send"
              size={36}
              color={primary}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default ChatBotHome;
