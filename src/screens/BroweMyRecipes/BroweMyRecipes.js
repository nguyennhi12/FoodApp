import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './BroweMyRecipes.styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {COLOR} from '../../assets/color';
import CustomRecipes from './component/CustomRecipes';
import {useNavigation} from '@react-navigation/native';
import {
  DATA_MY_RECIPE,
  DATA_MY_RECIPE_DESCRIPTION,
  ROUTER,
} from '../../constants/index';
const BrowseMyRecipes = props => {
  const navigation = useNavigation();
  const myRecipes = props.route.params;
  const [foodType, setFoodType] = useState(myRecipes.id);
  const [dataMyRecipe, setDataMyRecipe] = useState(
    DATA_MY_RECIPE_DESCRIPTION[foodType - 1].data,
  );
  const onGoBack = () => {
    navigation.goBack();
  };
  const onAddNew = () => {
    navigation.navigate(ROUTER.NEW_RECIPE);
  };
  const changePickerCategory = item => {
    setFoodType(item);
    setDataMyRecipe(DATA_MY_RECIPE_DESCRIPTION[item - 1].data);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBack} onPress={onGoBack}>
        <IconAntDesign name="left" size={14} style={{alignSelf: 'center'}} />
        <Text style={styles.headerText}>Back to my Recipes</Text>
      </TouchableOpacity>

      <View style={styles.bigTitle}>
        <Text style={styles.myRecipeText}>My Recipes</Text>
        <TouchableOpacity style={styles.addNewWrapper} onPress={onAddNew}>
          <IconAntDesign name="plus" size={15} color={COLOR.BUTTON} />
          <Text style={styles.addNewText}>Add New</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 2}}>
        <Picker
          selectedValue={foodType}
          style={styles.myDropDown}
          onValueChange={(item, index) => changePickerCategory(item)}>
          {DATA_MY_RECIPE.map(item => (
            <Picker.Item label={item.name} value={item.id} key={item.id} />
          ))}
        </Picker>
      </View>

      <View style={{flex: 20, marginBottom: 30}}>
        <FlatList
          data={dataMyRecipe}
          renderItem={({item}) => {
            return <CustomRecipes item={item} idMyRecipes={foodType} />;
          }}
          showsVerticalScrollIndicator={false}
        />
        <View></View>
      </View>
    </View>
  );
};

export default BrowseMyRecipes;
