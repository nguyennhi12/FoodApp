import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from './EditRecipe.styles';
import {Picker} from '@react-native-picker/picker';
import CustomDashedCard from './component/CustomDashedCard/CustomDashedCard';
import {useNavigation, useRoute} from '@react-navigation/native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import CustomIngredients from './component/CustomIngredients/CustomIngredients';
import HowToCook from './component/HowToCook/HowToCook';
import AdditionalInfo from './component/AdditionalInfo/AdditionalInfo';
import {DATA_MY_RECIPE} from '../../constants';
function EditRecipe({route}) {
  const [foodType, setFoodType] = useState(1);
  const navigation = useNavigation();
  const itemRecipe = route.params;
  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.goBack} onPress={onGoBack}>
        <IconAntDesign name="left" size={14} style={{alignSelf: 'center'}} />
        <Text style={styles.headerText}>Back to my Recipes</Text>
      </TouchableOpacity>
      <Text style={styles.newRecipe}>Edit Recipe</Text>

      <View style={styles.addNewWrapper}>
        <Image
          source={{uri: itemRecipe?.itemRecipes.image}}
          style={styles.addSquare}
        />
        <View style={styles.recipeNameWrapper}>
          <Text style={styles.recipeName}>Recipe Name</Text>
          <TextInput
            value={itemRecipe?.itemRecipes.name}
            placeholderTextColor="black"
            style={styles.inputText}
          />
        </View>
      </View>

      <CustomDashedCard
        type="Gallery"
        content="Upload Images or Open Camera"
        idMyRecipes={itemRecipe.idMyRecipes}
        idItemRecipe={itemRecipe.itemRecipes.idItem}
      />
      <CustomIngredients
        type="Ingredients"
        content="Add Ingredient"
        idMyRecipes={itemRecipe.idMyRecipes}
        idItemRecipe={itemRecipe.itemRecipes.idItem}
      />
      <HowToCook
        type="How to Cook"
        content="Add Directions"
        idMyRecipes={itemRecipe.idMyRecipes}
        idItemRecipe={itemRecipe.itemRecipes.idItem}
      />
      <AdditionalInfo
        type="Additional Info"
        content="Add Info"
        idMyRecipes={itemRecipe.idMyRecipes}
        idItemRecipe={itemRecipe.itemRecipes.idItem}
      />

      <Text style={styles.saveToText}>Save to</Text>

      <View style={styles.dropdownAndRecipe}>
        <Picker
          selectedValue={foodType}
          style={styles.myDropDown}
          onValueChange={(item, index) => setFoodType(item.id)}>
          {DATA_MY_RECIPE.map(item => (
            <Picker.Item label={item.name} value={item.id} key={item.id} />
          ))}
        </Picker>
        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.textLabel}>Save Recipe</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttonPost}>
        <Text style={styles.postText}>Post to Feed</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity style={styles.buttonRemove}>
          <Text style={styles.removeText}>Remove from Cookbook</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
export default EditRecipe;
