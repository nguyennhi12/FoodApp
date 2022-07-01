import React, {useRef} from 'react';
import {Animated, FlatList, View} from 'react-native';
import {DATA_RECIPE} from '../../../../constants';
import ItemRecipeContainer from '../ItemRecipe/ItemRecipe.container';
const FlatListRecipe = () => {
  const animatedFlatlistX = useRef(new Animated.Value(0)).current;
  const renderItem = item => {
    return (
      <ItemRecipeContainer item={item} animatedFlatlistX={animatedFlatlistX} />
    );
  };
  console.log('NhiNTY5 FlatListRecipe RENDER');
  return (
    <FlatList
      onScroll={Animated.event(
        [
          {
            nativeEvent: {contentOffset: {x: animatedFlatlistX}},
          },
        ],
        {
          useNativeDriver: false,
        },
      )}
      data={DATA_RECIPE}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      decelerationRate={0.7}
      snapToInterval={320}
    />
  );
};
export default React.memo(FlatListRecipe);
