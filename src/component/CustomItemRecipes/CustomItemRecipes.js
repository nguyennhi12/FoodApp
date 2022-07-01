import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './CustomItemRecipes.styles';
import {useNavigation} from '@react-navigation/native';
import {ROUTER} from '../../constants';
const CustomItemRecipes = props => {
  const navigation = useNavigation();
  const itemRecipes = props.data.item;
  const onViewMyRecipe = () => {
    navigation.navigate(ROUTER.BROWSE_MY_RECIPES, itemRecipes);
  };
  console.log('NhiNTY5 CustomItemRecipes RENDER');
  return (
    <TouchableOpacity
      style={styles.container}
      key={itemRecipes.id}
      onPress={onViewMyRecipe}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          backgroundColor: 'white',
        }}>
        <Image style={styles.styleImage} source={{uri: itemRecipes.image}} />
        <Text style={styles.styleName}>{itemRecipes.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomItemRecipes;
