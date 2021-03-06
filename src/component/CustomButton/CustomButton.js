import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './CustomButton.styles';
const CustomButton = props => {
  console.log('NhiNTY5 CustomButton RENDER');
  return (
    <TouchableOpacity
      onPress={props.onClick}
      disabled={!props.isEnableButton}
      style={styles({isEnableButton: !props.isEnableButton}).container}>
      <Text style={styles({isEnableButton: !props.isEnableButton}).textLabel}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};
export default React.memo(CustomButton);
