import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './CustomButtonVariant.styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
const CustomButtonVariant = props => {
  console.log('NhiNTY5 CustomButtonVariant RENDER');
  return (
    <TouchableOpacity onPress={props.onClick} style={styles.container}>
      <IconAntDesign name={props.nameIcon} color={styles.colorIcon} />
      <Text style={styles.textLabel}>{props.label}</Text>
    </TouchableOpacity>
  );
};
export default React.memo(CustomButtonVariant);
