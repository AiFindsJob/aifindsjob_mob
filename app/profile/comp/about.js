/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, Image, View, Dimensions} from 'react-native';
import primary from '../../index/properties';
import {ScrollView} from 'react-native-gesture-handler';
import TeamCard from './teamCard';
import {data} from './data';
import {Fonts} from '../../index/fonts';
class Aboutus extends Component {
  render() {
    const w = Dimensions.get('window').height;
    const width = Dimensions.get('screen').width;
    return (
      <View style={{height: w, backgroundColor: '#fff'}}>
        <ScrollView>
          <Text
            style={{
              textAlign: 'center',
              margin: 25,
              fontSize: 26,
              color: '#48484A',
              fontFamily: Fonts.Poppins,
            }}>
            About Us
          </Text>
          <Text
            style={{
              margin: 20,
              textAlign: 'center',
              color: '#48484A',
              fontFamily: Fonts.Poppins,
            }}>
            AIFINDSJOB helps you plan for your future! Match your interests to
            university subjects and explore each recommendation to find out what
            suits you.
          </Text>
          <View style={{marginBottom: 100}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 26,
                margin: 10,
                textAlign: 'center',
                color: '#48484A',
                fontFamily: Fonts.Poppins,
              }}>
              Our team
            </Text>
            {data.team.map((data, index) => (
              <TeamCard ename={data.ename} img={data.img} epos={data.epos} />
            ))}

            <View
              style={{
                width: width-30,
                alignSelf: 'center',
                margin: 10,
                marginTop: 10,
                borderRadius: 9,
                backgroundColor: '#fff',
                elevation: 5,
                marginBottom: 10,
              }}>
              <View
                style={{
                  backgroundColor: primary,
                  elevation: 5,
                  borderRadius: 9,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 20,
                    marginLeft: 20,
                    marginTop: 15,
                    fontFamily: Fonts.Poppins,
                  }}>
                  www.aifindsjob.com
                </Text>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 20,
                    marginLeft: 20,
                    marginTop: 15,
                    fontFamily: Fonts.Poppins,
                  }}>
                  aifindsjob@gmail.com
                </Text>
                <Text
                  style={{
                    color: '#fff',
                    fontFamily: Fonts.Poppins,
                    fontSize: 15,
                    margin: 15,
                  }}>
                  Phone : +91 98363562725
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Aboutus;
