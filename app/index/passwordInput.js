import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {TextField} from 'react-native-material-textfield';

class PasswordInputText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icEye: 'visibility-off',
      isPassword: true,
    };
  }

  getRef = ref => {
    if (this.props.getRef) {
      this.props.getRef(ref);
    }
  };

  changePwdType = () => {
    const {isPassword} = this.state;
    // set new state value
    this.setState({
      icEye: isPassword ? 'visibility' : 'visibility-off',
      isPassword: !isPassword,
    });
  };

  render() {
    const {iconSize, iconColor, style} = this.props;
    const {icEye, isPassword} = this.state;

    return (
      <View style={style}>
        <TextField
          {...this.props}
          ref={this.getRef}
          secureTextEntry={isPassword}
          label={this.props.lab}
        />
        <Icon
          style={styles.icon}
          name={this.state.icEye}
          size={iconSize}
          color={iconColor}
          onPress={this.changePwdType}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 33,
    right: 0,
  },
});

PasswordInputText.defaultProps = {
  iconSize: 25,
  label: 'Passwords',
  iconColor: '#9ba7b5',
};

PasswordInputText.propTypes = {
  iconSize: PropTypes.number,
  label: PropTypes.string,
  iconColor: PropTypes.string,
};

export default PasswordInputText;
