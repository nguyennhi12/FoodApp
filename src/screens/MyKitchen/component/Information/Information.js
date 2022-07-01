import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './Information.styles';
import {DATA_USER, ROUTER} from '../../../../constants';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const Information = () => {
  const navigation = useNavigation();
  const onEditProfile = () => {
    navigation.navigate(ROUTER.EDIT_PROFILE, DATA_USER);
  };
  console.log('NhiNTY5 Information RENDER');
  return (
    <View style={styles.container}>
      <Image
        source={{uri: DATA_USER.imageAvatar}}
        style={styles.stylesImageAvatar}
      />
      <View style={styles.stylesViewTextInfo}>
        <View style={styles.styleNameIcon}>
          <Text style={styles.stylesTextName}>{DATA_USER.name}</Text>
          <TouchableOpacity onPress={onEditProfile}>
            <IconAntDesign name="edit" size={25} />
          </TouchableOpacity>
        </View>

        <Text style={styles.stylesTextInfo}>{DATA_USER.position}</Text>
        <View style={styles.viewFollowLike}>
          <Text style={styles.stylesTextInfo}>
            {DATA_USER.follower} followers
          </Text>
          <Text style={styles.stylesTextInfo}>{DATA_USER.like} like</Text>
        </View>
      </View>
    </View>
  );
};
export default Information;
