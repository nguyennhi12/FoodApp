import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles} from './NewRecipe.styles';
import {Picker} from '@react-native-picker/picker';
import CustomDashedCard from './component/CustomDashedCard/CustomDashedCard';
import {useNavigation} from '@react-navigation/native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {DATA_MY_RECIPE} from '../../constants';
function NewRecipe() {
  const [foodType, setFoodType] = useState(1);
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.goBack();
  };
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.goBack} onPress={onGoBack}>
        <IconAntDesign name="left" size={14} style={{alignSelf: 'center'}} />
        <Text style={styles.headerText}>Back to my Recipes</Text>
      </TouchableOpacity>
      <Text style={styles.newRecipe}>New Recipe</Text>

      <View style={styles.addNewWrapper}>
        <View style={styles.addSquare}>
          <IconAntDesign name="plus" size={20} />
        </View>
        <View style={styles.recipeNameWrapper}>
          <Text style={styles.recipeName}>Recipe Name</Text>
          <TextInput
            placeholder="Write Down Recipe Name"
            placeholderTextColor="black"
            style={styles.inputText}
          />
        </View>
      </View>

      <CustomDashedCard type="Gallery" content="Upload Images or Open Camera" />
      <CustomDashedCard type="Ingredients" content="Add Ingredient" />
      <CustomDashedCard type="How to Cook" content="Add Directions" />
      <CustomDashedCard type="Additional Info" content="Add Info" />

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
    </ScrollView>
  );
}
export default NewRecipe;
