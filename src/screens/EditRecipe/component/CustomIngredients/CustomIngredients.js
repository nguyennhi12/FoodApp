import React from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import {styles} from './CustomIngredients.styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {COLOR} from '../../../../assets/color';
import {INFO_OF_RECIPE, getDataInfoItemRecipe} from '../../../../constants';
const CustomIngredients = props => {
  const data = getDataInfoItemRecipe(props.idMyRecipes, props.idItemRecipe)[0];
  const ingredients = data.ingredients;
  console.log('NhiNTY5 CustomIngredients RENDER');
  return (
    <View style={styles.container}>
      <View style={styles.typeAndIcon}>
        <Text style={styles.styleTitle}>{props.type}</Text>
        <TouchableOpacity>
          <IconAntDesign name="edit" size={25} color={COLOR.BUTTON} />
        </TouchableOpacity>
      </View>
      <View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <TouchableOpacity>
            <Image
              source={{uri: ingredients[0].image}}
              style={styles.styleImageNum23}
            />
          </TouchableOpacity>
          {ingredients.length > 1 ? (
            <TouchableOpacity>
              <Image
                source={{uri: ingredients[1].image}}
                style={styles.styleImageNum23}
              />
            </TouchableOpacity>
          ) : null}
          {ingredients.length > 2 ? (
            <TouchableOpacity>
              <Image
                source={{uri: ingredients[2].image}}
                style={styles.styleImageNum23}
              />
            </TouchableOpacity>
          ) : null}
          {ingredients.length > 3 ? (
            ingredients.length == 4 ? (
              <TouchableOpacity>
                <Image
                  source={{uri: ingredients[3].image}}
                  style={styles.styleImageNum4}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={{uri: ingredients[3].image}}
                  style={styles.styleImageNum4Opacity}
                />
                <Text style={styles.styleTextPlus}>
                  {ingredients.length - 4}+
                </Text>
              </TouchableOpacity>
            )
          ) : null}
        </View>
      </View>
    </View>
  );
};
export default CustomIngredients;
