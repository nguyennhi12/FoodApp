import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './MyKitchen.styles';
import Information from './component/Information/Information';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import CustomTabView from '../../component/CustomTabView/CustomTabView';
import {DATA_MY_RECIPE, ROUTER} from '../../constants';
import {useNavigation} from '@react-navigation/native';
const MyKitchen = () => {
  const navigation = useNavigation();
  const optionMyKitchen = [
    {
      id: 1,
      num: 20,
      name: 'Recipes',
      data: DATA_MY_RECIPE,
    },
    {
      id: 2,
      num: 75,
      name: 'Saved',
      data: DATA_MY_RECIPE,
    },
    {
      id: 3,
      num: 248,
      name: 'Following',
      data: DATA_MY_RECIPE,
    },
  ];

  const onSetting = () => {
    navigation.navigate(ROUTER.SETTING_SCREEN);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.stylesHeader}>My Kitchen</Text>
        <TouchableOpacity style={styles.styleSetting} onPress={onSetting}>
          <IconAntDesign
            name="setting"
            style={styles.stylesIcon}
            size={styles.sizeIcon}
          />
          <Text style={styles.stylesSetting}>Setting</Text>
        </TouchableOpacity>
      </View>
      <Information />
      <CustomTabView optionMyKitchen={optionMyKitchen} />
    </View>
  );
};

export default MyKitchen;
