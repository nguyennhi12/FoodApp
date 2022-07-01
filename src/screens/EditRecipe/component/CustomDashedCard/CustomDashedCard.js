import React from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import {styles} from './CustomDashedCard.styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {COLOR} from '../../../../assets/color';
import {INFO_OF_RECIPE, getDataInfoItemRecipe} from '../../../../constants';
import {ShowNotification} from '../../../../component/CustomModalDimesion/CustomModalDimesion';
import CustomBodyModal from './CustomBodyModal/CustomBodyModal';
const CustomDashedCard = props => {
  const data = getDataInfoItemRecipe(props.idMyRecipes, props.idItemRecipe)[0];
  const dataImage = data.dataImage;
  const setDetailModal = () => {
    return <CustomBodyModal dataImage={dataImage} />;
  };
  console.log('NhiNTY5 CustomDashedCard RENDER');
  const onEdit = () => {
    ShowNotification({
      visible: true,
      option: {
        title: props.type,
        buttonAccept: true,
        detailComponent: setDetailModal,
      },
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.typeAndIcon}>
        <Text style={styles.styleTitle}>{props.type}</Text>
        <TouchableOpacity onPress={onEdit}>
          <IconAntDesign name="edit" size={25} color={COLOR.BUTTON} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image
            source={{uri: dataImage[0].image}}
            style={styles.styleImageNum1}
          />
        </TouchableOpacity>

        <View style={{flexDirection: 'row', marginTop: 15}}>
          {dataImage.length > 1 ? (
            <TouchableOpacity>
              <Image
                source={{uri: dataImage[1].image}}
                style={styles.styleImageNum23}
              />
            </TouchableOpacity>
          ) : null}
          {dataImage.length > 2 ? (
            <TouchableOpacity>
              <Image
                source={{uri: dataImage[2].image}}
                style={styles.styleImageNum23}
              />
            </TouchableOpacity>
          ) : null}
          {dataImage.length > 3 ? (
            dataImage.length == 4 ? (
              <TouchableOpacity>
                <Image
                  source={{uri: dataImage[3].image}}
                  style={styles.styleImageNum4}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={{uri: dataImage[3].image}}
                  style={styles.styleImageNum4Opacity}
                />
                <Text style={styles.styleTextPlus}>
                  {dataImage.length - 4}+
                </Text>
              </TouchableOpacity>
            )
          ) : null}
        </View>
      </View>
    </View>
  );
};
export default CustomDashedCard;
