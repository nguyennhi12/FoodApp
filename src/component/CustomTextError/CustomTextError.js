import React from 'react';
import {Text} from 'react-native';
import {styles} from './CustomTextError.styles';
const CustomTextError = props => {
  console.log('NhiNTY5 CustomTextError RENDER');
  return <Text style={styles.labelError}>{props.labelError}</Text>;
};

export default CustomTextError;
