import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import primary from '../../../index/properties';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextField, FilledTextField} from 'react-native-material-textfield';
import {Dropdown} from 'react-native-material-dropdown';
import {Fonts} from '../../../index/fonts';
export default class WorkDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 'Date of graduate',
    };
  }

  render() {
    let data = [
      {
        value: 0,
      },
      {
        value: 1,
      },
      {
        value: 2,
      },
    ];
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
              Work & Internships
            </Text>
            <View
              style={{width: '95%', marginLeft: '2.5%', marginRight: '2.5%'}}>
              <TextField style={{paddingBottom: 5}} label="Organisation">
                <Icon
                  style={styles.icon}
                  name="visibility-off"
                  size={25}
                  color="#222222"
                />
              </TextField>
              <TextField style={{paddingBottom: 5}} label="Designation">
                <Icon
                  style={styles.icon}
                  name="visibility-off"
                  size={25}
                  color="#222222"
                />
              </TextField>
              <View style={{width: 100}}>
                <Dropdown label="Year of exp" data={data} />
              </View>
              <TextField
                style={{paddingBottom: 5}}
                label="Project Details"
                multiline>
                <Icon
                  style={styles.icon}
                  name="visibility-off"
                  size={25}
                  color="#222222"
                />
              </TextField>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  height: 50,
                  borderRadius: 9,
                  justifyContent: 'center',
                  alignSelf: 'flex-start',
                  width: '35%',
                  backgroundColor: '#fff',
                  shadowColor: '#00c3ee',
                  margin: 30,
                  elevation: 10,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: Fonts.Poppins,
                    fontSize: 22,
                    color: primary,
                  }}
                  onPress={this.props.back}>
                  Back
                </Text>
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
                  >
                  Next
                </Text>
              </View>
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
