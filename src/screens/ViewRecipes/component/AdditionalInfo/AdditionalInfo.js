import React from 'react';
import {Text, Image, TouchableOpacity, View, ScrollView} from 'react-native';
import {styles} from './AdditionalInfo.styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {COLOR} from '../../../../assets/color';
import {INFO_OF_RECIPE, getDataInfoItemRecipe} from '../../../../constants';
const AdditionalInfo = props => {
  const data = getDataInfoItemRecipe(props.idMyRecipes, props.idItemRecipe)[0];
  console.log('NhiNTY5 AdditionalInfo RENDER');
  const additionalInfo = data.additionalInfo;
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginLeft: 15, paddingBottom: 20}}>
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
      </ScrollView>
    </View>
  );
};
export default AdditionalInfo;
