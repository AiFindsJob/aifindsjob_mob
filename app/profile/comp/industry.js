import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import primary from '../../index/properties';
import {data} from './data';
import {ScrollView} from 'react-native-gesture-handler';
import {Fonts} from '../../index/fonts';
let w = Dimensions.get('window').width;
let m = w - 30;
let i=0;
export default class Industry extends React.Component {
  render() {
    return (
      <View>
        <ScrollView style={{}}>
          {data.industry.map((data, index) => (
            <View>
              <Text
                key={i++}
                style={{fontSize: 20, fontFamily: Fonts.Poppins,backgroundColor:'#fff',elevation:2,width:w,paddingLeft:10}}>
                - {data}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
