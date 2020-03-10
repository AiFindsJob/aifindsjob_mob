/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import primary from '../index/properties';
import DocumentPicker from 'react-native-document-picker';
let h = Dimensions.get('window').height;

class User extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{backgroundColor: '#fff', height: h, marginTop: 10}}>
        <View
          style={{
            backgroundColor: '#fff',
            minHeight: 50,
            width: '95%',
            marginLeft: '2.5%',
            marginRight: '2.5%',
            elevation: 5,
          }}>
          <View style={{backgroundColor: primary, elevation: 5}}>
            <View>
              <Image
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 80,
                  alignSelf: 'center',
                  marginTop: 20,
                }}
                source={{uri: 'https://source.unsplash.com/1024x768/?boy'}}
              />
            </View>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                marginLeft: 20,
                marginTop: 25,
              }}>
              Name
            </Text>
            <Text style={{color: '#fff', fontSize: 15, margin: 20}}>
              example@gmail.com
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            minHeight: 50,
            width: '95%',
            marginLeft: '2.5%',
            marginRight: '2.5%',
            elevation: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, color: '#48484A', margin: 10}}>
            Update password!
          </Text>
          <Icon
            style={{marginTop: 10, marginRight: 10, elevation: 30}}
            name="edit"
            size={30}
            color={primary}
            onPress={() => {
              navigate('Reset password');
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            minHeight: 50,
            width: '95%',
            marginLeft: '2.5%',
            marginRight: '2.5%',
            elevation: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, color: '#48484A', margin: 10}}>
            Resume
          </Text>
          <Icon
            style={{marginTop: 10, marginRight: 10, elevation: 30}}
            name="folder-open"
            size={30}
            color={primary}
            onPress={async () => {
              try {
                const res = await DocumentPicker.pick({
                  type: [DocumentPicker.types.images],
                });
                alert(
                  res.uri,
                  res.type, // mime type
                  res.name,
                  res.size
                );
              } catch (err) {
                if (DocumentPicker.isCancel(err)) {
                  // User cancelled the picker, exit any dialogs or menus and move on
                } else {
                  throw err;
                }
              }
            }}
          />
        </View>

        <Text
          style={{
            color: '#48484A',
            fontSize: 20,
            marginLeft: 20,
            marginTop: 50,
          }}
          onStartShouldSetResponder={() => {
            navigate('Aboutus');
          }}>
          About us
        </Text>
        <Text
          style={{
            color: '#48484A',
            fontSize: 20,
            marginLeft: 20,
            marginTop: 30,
          }}
          onStartShouldSetResponder={() => {
            navigate('Aboutus');
          }}>
          Contact us
        </Text>
        <Text
          style={{
            color: '#48484A',
            fontSize: 25,
            marginLeft: 20,
            marginTop: 40,
          }}
          onStartShouldSetResponder={() => {
            navigate('SplashScreen');
          }}>
          Sign out
        </Text>
      </View>
    );
  }
}
export default User;
