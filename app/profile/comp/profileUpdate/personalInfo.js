import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import primary from '../../../index/properties';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextField} from 'react-native-material-textfield';
import {Fonts} from '../../../index/fonts';
export default class PersonalInfo extends React.Component {
  render() {
    return (
      <View>
        <ScrollView
          style={{marginLeft: 10, marginRight: 10}}
          showsVerticalScrollIndicator={false}>
          <View>
            <Text
              style={{
                textAlign: 'center',
                margin: 10,
                fontSize: 26,
                color: '#48484A',
                fontFamily: Fonts.Poppins,
              }}>
              Personal Info
            </Text>
            <View
              style={{width: '95%', marginLeft: '2.5%', marginRight: '2.5%'}}>
              <TextField style={{paddingBottom: 5}} label="First name">
                <Icon
                  style={styles.icon}
                  name="visibility-off"
                  size={25}
                  color="#222222"
                />
              </TextField>
              <TextField style={{paddingBottom: 5}} label="Last name">
                <Icon
                  style={styles.icon}
                  name="visibility-off"
                  size={25}
                  color="#222222"
                />
              </TextField>
              <TextField
                style={{paddingBottom: 5}}
                label="Address line 1"
                multiline>
                <Icon
                  style={styles.icon}
                  name="visibility-off"
                  size={25}
                  color="#222222"
                />
              </TextField>
              <TextField
                style={{paddingBottom: 5}}
                label="Address line 2"
                multiline>
                <Icon
                  style={styles.icon}
                  name="visibility-off"
                  size={25}
                  color="#222222"
                />
              </TextField>
              <TextField style={{paddingBottom: 5}} label="Phone">
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
            </View>
            <View
              style={{
                height: 50,
                borderRadius: 9,
                justifyContent: 'center',
                alignSelf: 'flex-end',
                width: '35%',
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
                }}
                onPress={this.props.next}>
                Next
              </Text>
            </View>
          </View>
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
