import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './CustomItemRecipesInSearch.styles';

const CustomItemRecipesInSearch = props => {
  const data = props.item.item;
  console.log('NhiNTY5 CustomItemRecipesInSearch RENDER');
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: data.image}} style={styles.styleImage} />
      <Text style={styles.styleText}>{data.name}</Text>
    </TouchableOpacity>
  );
};
export default React.memo(CustomItemRecipesInSearch);
