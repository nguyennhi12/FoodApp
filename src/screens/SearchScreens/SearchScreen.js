import React from 'react';
import {View, ScrollView} from 'react-native';
import {styles} from './SearchScreen.styles';
import CustomListRecipesInSearch from './component/CustomListRecipesInSearch/CustomListRecipesInSearch';
import CustomSearchbar from './component/CustomSearchbar/CustomSearchbar';
import {TRENDING_RECIPES} from '../../constants';
import CustomItemListMakeIt from './component/CustomItemListMakeIt/CustomItemListMakeIt';
const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <CustomSearchbar />
      <View style={{flex: 6}}>
        <ScrollView>
          <CustomListRecipesInSearch data={TRENDING_RECIPES} />
          <View style={styles.styleLine} />
          <CustomItemListMakeIt />
        </ScrollView>
      </View>
    </View>
  );
};
export default SearchScreen;
