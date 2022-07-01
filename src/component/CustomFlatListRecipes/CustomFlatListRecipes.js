import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {styles} from './CustomFlatListRecipes.styles';
import CustomItemRecipes from '../CustomItemRecipes/CustomItemRecipes';
import {ApiGetRecipes} from '../../untils/APIGetRecipes';
import CustomSkeletonRecipe from '../CustomSkeletonRecipe/CustomSkeletonRecipe';
import {COLOR} from '../../assets/color';
const CustomFlatListRecipes = () => {
  console.log('NhiNTY5 CustomFlatListRecipes RENDER');
  const renderItem = item => {
    return <CustomItemRecipes data={item} />;
  };
  const [dataMyRecipe, setDataMyRecipe] = useState({
    data: [],
    take: 6,
    skip: 0,
  });
  const [isFetching, setIsFetching] = useState(false);
  const [isEnding, setIsEnding] = useState(false);
  const onLoadMore = async () => {
    if (!isFetching && !isEnding && !!dataMyRecipe.data.length) {
      setIsFetching(true);
      const data = await ApiGetRecipes.getDataRecipes(
        dataMyRecipe.take,
        dataMyRecipe.skip,
      );
      if (data.length <= 6) {
        setIsFetching(false);
        setIsEnding(true);
      } else {
        setIsFetching(false);
        setDataMyRecipe({
          data: [...dataMyRecipe.data, ...data],
          take: dataMyRecipe.take,
          skip: dataMyRecipe.skip + dataMyRecipe.take,
        });
      }
    }
  };

  const onGetDataRecipes = async () => {
    setIsFetching(true);
    const data = await ApiGetRecipes.getDataRecipes(
      dataMyRecipe.take,
      dataMyRecipe.skip,
    );
    if (data.length == 0) {
      setIsEnding(true);
      setIsFetching(false);
    } else {
      setDataMyRecipe({
        data: [...dataMyRecipe.data, ...data],
        take: dataMyRecipe.take,
        skip: dataMyRecipe.skip + dataMyRecipe.take,
      });
      setIsFetching(false);
    }
  };

  useEffect(() => {
    onGetDataRecipes();
  }, []);
  const renderEmptyData = () => {
    if (!!isFetching && !isEnding) {
      return <CustomSkeletonRecipe />;
    }
    if (!isFetching && !!dataMyRecipe.data.length) {
      return <Text style={{fontSize: 25}}>Không có danh sách hiển thị</Text>;
    }
    return null;
  };
  const renderRefreshControl = async () => {
    setIsEnding(false);
    if (!isFetching) {
      setIsFetching(true);
      const data = await ApiGetRecipes.getDataRecipes(6, 0);
      if (data.length == 0) {
        setIsEnding(true);
      } else {
        setDataMyRecipe({
          data: data,
          take: dataMyRecipe.take,
          skip: dataMyRecipe.take,
        });
      }
    }
    setIsFetching(false);
  };
  const renderListFooterComponent = () => {
    if (!!isFetching && !isEnding && !!dataMyRecipe.data.length) {
      return <ActivityIndicator size="large" color={COLOR.BUTTON} />;
    }
    if (!isFetching && isEnding) {
      return <Text style={{fontSize: 16}}>Hết rồi nè !!</Text>;
    }
    return null;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={dataMyRecipe.data}
        extraData={item => item.id}
        renderItem={renderItem}
        numColumns={2}
        ListEmptyComponent={renderEmptyData}
        ListFooterComponent={renderListFooterComponent}
        refreshControl={
          <RefreshControl
            removeClippedSubviews={true}
            refreshing={false}
            onRefresh={renderRefreshControl}
          />
        }
        ListFooterComponentStyle={{
          alignItems: 'center',
          marginVertical: 30,
        }}
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
export default React.memo(CustomFlatListRecipes);
