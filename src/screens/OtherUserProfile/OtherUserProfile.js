import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './OtherUserProfile.styles';
import Information from './component/Information/Information';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import CustomTabView from '../../component/CustomTabView/CustomTabView';
import {DATA_MY_RECIPE, ROUTER} from '../../constants';
import {useNavigation} from '@react-navigation/native';
const OtherUserProfile = ({route}) => {
  const itemUser = route.params;
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
      num: 248,
      name: 'Following',
      data: DATA_MY_RECIPE,
    },
  ];
  const onGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <TouchableOpacity style={styles.goBack} onPress={onGoBack}>
          <IconAntDesign name="left" size={14} style={{alignSelf: 'center'}} />
          <Text style={styles.headerText}>Back </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.goBack}>
          <IconAntDesign
            name="ellipsis1"
            size={25}
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>
      </View>

      <Information itemUser={itemUser} />
      <CustomTabView optionMyKitchen={optionMyKitchen} />
    </View>
  );
};

export default OtherUserProfile;
