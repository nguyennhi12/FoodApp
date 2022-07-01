import React from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import {styles} from './CustomDashedCard.styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
const CustomDashedCard = props => {
  console.log('NhiNTY5 CustomDashedCard RENDER');
  return (
    <View style={styles.container}>
      <View style={styles.typeAndIcon}>
        <Text style={styles.styleTitle}>{props.type}</Text>
        <IconAntDesign name="edit" size={25} />
      </View>

      <TouchableOpacity style={styles.dashedCover}>
        <IconAntDesign name="plus" size={20} style={{marginHorizontal: 19}} />
        <Text style={styles.contentText}>{props.content}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CustomDashedCard;
