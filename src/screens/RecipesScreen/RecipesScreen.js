import React from 'react';
import {View} from 'react-native';
import HeaderRecipe from './component/HeaderRecipe/HeaderRecipe';
import FlatListRecipe from './component/FlatListRecipe/FlatListRecipe';
import {styles} from './RecipesScreen.styles';
const RecipesScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderRecipe />
      <View style={styles.styleFlatList}>
        <FlatListRecipe />
      </View>
    </View>
  );
};
export default RecipesScreen;
