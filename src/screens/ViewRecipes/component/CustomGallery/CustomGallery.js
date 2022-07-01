import React from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import {styles} from './CustomGallery.styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {COLOR} from '../../../../assets/color';
import {INFO_OF_RECIPE, getDataInfoItemRecipe} from '../../../../constants';
const CustomGallery = props => {
  const data = getDataInfoItemRecipe(props.idMyRecipes, props.idItemRecipe)[0];
  const dataImage = data.dataImage;
  console.log('NhiNTY5 CustomGallery RENDER');
  return (
    <View style={styles.container}>
      <View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          {dataImage.length > 0 ? (
            <TouchableOpacity>
              <Image
                source={{uri: dataImage[0].image}}
                style={styles.styleImageNum23}
              />
            </TouchableOpacity>
          ) : null}
          {dataImage.length > 1 ? (
            <TouchableOpacity>
              <Image
                source={{uri: dataImage[1].image}}
                style={styles.styleImageNum23}
              />
            </TouchableOpacity>
          ) : null}
          {dataImage.length > 2 ? (
            dataImage.length == 4 ? (
              <TouchableOpacity>
                <Image
                  source={{uri: dataImage[2].image}}
                  style={styles.styleImageNum4}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={{uri: dataImage[2].image}}
                  style={styles.styleImageNum4Opacity}
                />
                <Text style={styles.styleTextPlus}>
                  {dataImage.length - 3}+
                </Text>
              </TouchableOpacity>
            )
          ) : null}
        </View>
      </View>
    </View>
  );
};
export default CustomGallery;
