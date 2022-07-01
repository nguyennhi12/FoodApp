import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from './CustomListRecipesInSearch.styles';
import CustomItemRecipesInSearch from '../CustomItemRecipesInSearch/CustomItemRecipesInSearch';
const CustomListRecipesInSearch = props => {
  const data = props.data;
  const renderItem = item => {
    return <CustomItemRecipesInSearch item={item} />;
  };
  console.log('NhiNTY5 CustomListRecipesInSearch RENDER');
  return (
    <View style={styles.container}>
      <Text style={styles.styleTitle}>{data.title}</Text>
      <FlatList
        data={data.data}
        extraData={item => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default React.memo(CustomListRecipesInSearch);
