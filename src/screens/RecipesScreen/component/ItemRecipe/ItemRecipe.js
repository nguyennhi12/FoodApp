import React, {useCallback, useState} from 'react';
import {View, Image, Text, TouchableOpacity, Animated} from 'react-native';
import {styles} from './ItemRecipe.styles';
import CustomButtonVariant from '../../../../component/CustomButtonVariant/CustomButtonVariant';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import CustomModal from '../CustomModal/CustomModal';
import {useNavigation} from '@react-navigation/native';
import {DATA_MY_RECIPE, ROUTER} from '../../../../constants';
const ItemRecipe = props => {
  const [love, setLove] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dataRecipe = props.item.item;
  const navigation = useNavigation();
  const onSave = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);
  const onViewOtherProfile = () => {
    navigation.navigate(ROUTER.OTHER_USER_PROFILE, dataRecipe);
  };
  const inputRange = [
    (dataRecipe.id - 2) * 320,
    (dataRecipe.id - 1) * 320,
    dataRecipe.id * 320,
  ];

  const opacityAnimation = props.animatedFlatlistX.interpolate({
    inputRange: inputRange,
    outputRange: [0.6, 1, 0.6],
    extrapolate: 'clamp',
  });
  console.log('NhiNTY5 ItemRecipe RENDER');
  return (
    <Animated.View style={{flex: 1, opacity: opacityAnimation}}>
      <View style={styles.styleNameHour}>
        <TouchableOpacity onPress={onViewOtherProfile}>
          <Image
            source={{
              uri: dataRecipe.imageAvatar,
            }}
            style={styles.styleImage}
          />
        </TouchableOpacity>

        <View style={styles.styleGroupName}>
          <Text style={styles.styleName} onPress={onViewOtherProfile}>
            {dataRecipe.userName}
          </Text>
          <Text style={styles.styleHour}>{dataRecipe.timePost}</Text>
        </View>
      </View>
      <Image
        source={{uri: dataRecipe.image}}
        style={styles.styleImageSwiper}></Image>
      <View style={styles.styleNameDescription}>
        <View style={styles.styleNameHeart}>
          <Text style={styles.styleTextNameImage}>{dataRecipe.nameImage}</Text>
          <TouchableOpacity onPress={() => setLove(!love)}>
            {love ? (
              <IconAntDesign name="heart" color={'red'} size={20} />
            ) : (
              <IconAntDesign name="hearto" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <Text style={styles.styleTextDescription}>
          {dataRecipe.description}
        </Text>
      </View>
      <View style={styles.styleLikeComment}>
        <Text style={styles.styleTextLikeComment}>{dataRecipe.like} likes</Text>
        <Text style={styles.styleTextLikeComment}>
          {dataRecipe.comment} Comments
        </Text>
        <CustomButtonVariant nameIcon="plus" label="Save" onClick={onSave} />
      </View>
      <CustomModal showModal={showModal} setShowModal={setShowModal} />
    </Animated.View>
  );
};
export default React.memo(ItemRecipe);
