import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {styles} from './CustomRecipes.styles';
import CustomButtonVariant from '../../../component/CustomButtonVariant/CustomButtonVariant';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {COLOR} from '../../../assets/color';
import {useNavigation} from '@react-navigation/native';
import {ROUTER} from '../../../constants';
function CustomRecipes(props) {
  const navigation = useNavigation();
  const itemRecipes = props.item;
  const idMyRecipes = props.idMyRecipes;
  const onEditRecipes = () => {
    navigation.navigate(ROUTER.EDIT_RECIPES, {itemRecipes, idMyRecipes});
  };
  const onViewRecipes = () => {
    navigation.navigate(ROUTER.VIEW_RECIPES, {itemRecipes, idMyRecipes});
  };
  console.log('NhiNTY5 CustomRecipes RENDER');
  return (
    <TouchableOpacity style={styles.container} onPress={onViewRecipes}>
      <View style={styles.foodImg}>
        <Image source={{uri: itemRecipes.image}} style={styles.foodImg} />
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 10,
            backgroundColor: COLOR.BOTTOM_LINE,
            borderRadius: 50,
            width: 30,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={onEditRecipes}>
          <IconAntDesign name="edit" size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.foodName}>
        <Text style={styles.foodNameText}>{itemRecipes.name}</Text>
      </View>

      <View style={styles.instruction}>
        <Image source={require('../../../assets/images/min.jpg')} />
        <Image source={require('../../../assets/images/ingredients.jpg')} />
        <CustomButtonVariant nameIcon="caretleft" label="Cook" />
      </View>
    </TouchableOpacity>
  );
}

export default CustomRecipes;
