import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import primary from '../../../index/properties';
import {ScrollView} from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextField} from 'react-native-material-textfield';
import {Fonts} from '../../../index/fonts';
export default class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 'Date of graduate',
    };
  }
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
              Education
            </Text>
            <View
              style={{width: '95%', marginLeft: '2.5%', marginRight: '2.5%'}}>
              <TextField style={{paddingBottom: 5}} label="College name">
                <Icon
                  style={styles.icon}
                  name="visibility-off"
                  size={25}
                  color="#222222"
                />
              </TextField>
              <TextField style={{paddingBottom: 5}} label="City">
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
              <TextField style={{paddingBottom: 5}} label="State">
                <Icon
                  style={styles.icon}
                  name="visibility-off"
                  size={25}
                  color="#222222"
                />
              </TextField>
              <DatePicker
                style={{width: 200, marginTop: 20}}
                mode="date"
                placeholder={this.state.date}
                format="YYYY-MM-DD"
                minDate="2018-01-01"
                maxDate="2030-01-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                  },
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={date => {
                  this.setState({date: date});
                }}
              />
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
                  onPress={this.props.next}>
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
