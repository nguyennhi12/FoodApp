import React, {useState} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import {CATEGORY_MAKE_IT, MAKE_IT} from '../../../../constants';
import {styles} from './CustomItemListMakeIt.styles';
import CustomListRecipesInSearch from '../CustomListRecipesInSearch/CustomListRecipesInSearch';
const CustomItemListMakeIt = () => {
  const [idOption, setIdOption] = useState(1);
  console.log('NhiNTY5 CustomItemListMakeIt RENDER');
  const renderItem = item => {
    return (
      <TouchableOpacity
        style={styles.styleFillOption}
        onPress={() => setIdOption(item.item.idLine)}>
        <Text
          style={
            idOption == item.item.idLine
              ? styles.styleCategory
              : styles.styleTitleInActive
          }>
          {item.item.nameLine}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.styleTitle}>Món ngon từ rau quả ...</Text>
      {/* option */}
      <FlatList
        data={CATEGORY_MAKE_IT}
        extraData={item => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <CustomListRecipesInSearch data={MAKE_IT.data[idOption - 1]} />
    </View>
  );
};
export default React.memo(CustomItemListMakeIt);
