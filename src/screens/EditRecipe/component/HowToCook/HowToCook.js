import React from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import {styles} from './HowToCook.styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {COLOR} from '../../../../assets/color';
import {INFO_OF_RECIPE, getDataInfoItemRecipe} from '../../../../constants';
const HowToCook = props => {
  const data = getDataInfoItemRecipe(props.idMyRecipes, props.idItemRecipe)[0];
  const howToCook = data.howToCook;
  console.log('NhiNTY5 HowToCook RENDER');
  return (
    <View style={styles.container}>
      <View style={styles.typeAndIcon}>
        <Text style={styles.styleTitle}>{props.type}</Text>
        <TouchableOpacity>
          <IconAntDesign name="edit" size={25} color={COLOR.BUTTON} />
        </TouchableOpacity>
      </View>
      <View>
        <View style={{marginTop: 15}}>
          {howToCook.map(item => (
            <View
              style={{flexDirection: 'row', alignItems: 'center'}}
              key={item.idHowto}>
              <View style={styles.styleViewStep}>
                <Text style={styles.styleText}>{item.idHowto}</Text>
              </View>
              <Text style={styles.styleText}>{item.description}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
export default HowToCook;
