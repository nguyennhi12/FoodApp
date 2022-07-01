import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './Information.styles';
import {DATA_USER} from '../../../../constants';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from '../../../../component/CustomButton/CustomButton';
const Information = props => {
  const itemUser = props.itemUser;
  console.log('NhiNTY5 InformationOtherUserProfile RENDER');
  return (
    <View style={styles.container}>
      <View style={styles.styleOnTopInformation}>
        <Image
          source={{uri: itemUser.imageAvatar}}
          style={styles.stylesImageAvatar}
        />
        <View style={styles.stylesViewTextInfo}>
          <View style={styles.styleNameIcon}>
            <Text style={styles.stylesTextName}>{itemUser.userName}</Text>
          </View>

          <Text style={styles.stylesTextInfo}>{DATA_USER.position}</Text>
          <View style={styles.viewFollowLike}>
            <Text style={styles.stylesTextInfo}>
              {DATA_USER.follower} followers
            </Text>
            <Text style={styles.stylesTextInfo}>{itemUser.like} like</Text>
          </View>
        </View>
      </View>
      <CustomButton
        label={'Follow'}
        isEnableButton={true}
        onClick={() => console.log('Nhi')}
      />
    </View>
  );
};
export default Information;
