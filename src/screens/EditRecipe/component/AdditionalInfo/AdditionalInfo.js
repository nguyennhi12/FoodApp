import React from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import {styles} from './AdditionalInfo.styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {COLOR} from '../../../../assets/color';
import {INFO_OF_RECIPE, getDataInfoItemRecipe} from '../../../../constants';
import {ShowNotification} from '../../../../component/CustomModalDimesion/CustomModalDimesion';
import CustomBodyModal from './CustomBodyModal/CustomBodyModal';
const AdditionalInfo = props => {
  const data = getDataInfoItemRecipe(props.idMyRecipes, props.idItemRecipe)[0];
  const additionalInfo = data.additionalInfo;
  const setDetailModal = () => {
    return <CustomBodyModal additionalInfo={additionalInfo} />;
  };
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
  console.log('NhiNTY5 AdditionalInfo RENDER');
  return (
    <View style={styles.container}>
      <View style={styles.typeAndIcon}>
        <Text style={styles.styleTitle}>{props.type}</Text>
        <TouchableOpacity onPress={onEdit}>
          <IconAntDesign name="edit" size={25} color={COLOR.BUTTON} />
        </TouchableOpacity>
      </View>
      <View>
        <View style={{marginTop: 15}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Text style={styles.styleText}>Serving Time</Text>
            <Text style={styles.styleText}>{additionalInfo.servingTime}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Text style={styles.styleText}>Serving Time</Text>
            <Text style={styles.styleText}>
              {additionalInfo.nutritionFacts}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.styleText}>Tags</Text>
            <Text style={styles.styleText}>{additionalInfo.tags}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default AdditionalInfo;
