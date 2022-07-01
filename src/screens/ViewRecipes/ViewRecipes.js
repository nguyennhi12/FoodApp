import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  SafeAreaView,
  useWindowDimensions,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './ViewRecipes.styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import CustomGallery from './component/CustomGallery/CustomGallery';
import CustomIngredients from './component/CustomIngredients/CustomIngredients';
import {OPTION_VIEW_RECIPES} from '../../constants';
import AdditionalInfo from './component/AdditionalInfo/AdditionalInfo';
import HowToCook from './component/HowToCook/HowToCook';
import {useNavigation} from '@react-navigation/native';
const ViewRecipes = ({route}) => {
  const itemRecipe = route.params;
  console.log('Nhi', itemRecipe);
  const [idOption, setIdOption] = useState(1);
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.goBack();
  };
  const renderItem = item => {
    return (
      <TouchableOpacity
        style={styles.styleFillOption}
        onPress={() => setIdOption(item.item.option)}>
        <Text
          style={
            idOption == item.item.option
              ? styles.styleCategory
              : styles.styleTitleInActive
          }>
          {item.item.nameOption}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{flex: 4, backgroundColor: 'rgba(40, 41, 40, 0.5)'}}
        imageStyle={{opacity: 0.5}}
        source={{uri: itemRecipe.itemRecipes.image}}>
        <View>
          <TouchableOpacity style={styles.containerHeader} onPress={onGoBack}>
            <IconAntDesign name="left" size={20} color="white" />
            <Text style={styles.textTitleHeader}>Back to MyProfile</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textTitle}>Engine-Cooked Honey Orange Pancake</Text>
        <TouchableOpacity />
      </ImageBackground>
      <View style={{flex: 5}}>
        <CustomGallery
          type="Gallery"
          content="Upload Images or Open Camera"
          idMyRecipes={itemRecipe.idMyRecipes}
          idItemRecipe={itemRecipe.itemRecipes.idItem}
        />
        <View
          style={{
            flex: 0.1,
            marginLeft: 20,
            marginBottom: 10,
          }}>
          <FlatList
            data={OPTION_VIEW_RECIPES}
            extraData={item => item.id}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {idOption == 1 ? (
          <CustomIngredients
            type="Ingredients"
            content="Add Ingredient"
            idMyRecipes={itemRecipe.idMyRecipes}
            idItemRecipe={itemRecipe.itemRecipes.idItem}
          />
        ) : idOption == 2 ? (
          <HowToCook
            type="How to Cook"
            content="Add Directions"
            idMyRecipes={itemRecipe.idMyRecipes}
            idItemRecipe={itemRecipe.itemRecipes.idItem}
          />
        ) : (
          <AdditionalInfo
            type="Additional Info"
            content="Add Info"
            idMyRecipes={itemRecipe.idMyRecipes}
            idItemRecipe={itemRecipe.itemRecipes.idItem}
          />
        )}
      </View>
    </View>
  );
};

export default ViewRecipes;
