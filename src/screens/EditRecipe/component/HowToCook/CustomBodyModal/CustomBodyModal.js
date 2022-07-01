import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CustomInputText from '../../../../../component/CustomInputText/CustomInputText';
import {STATE_TEXT} from '../../../../../constants';
import {styles} from './CustomBodyModal.styles';
const CustomBodyModal = props => {
  const additionalInfo = props.additionalInfo;
  const [serverTime, setServerTime] = useState();
  const [error, setError] = useState();
  console.log('NhiNTY5 CustomBodyModalHowToCook RENDER');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <CustomInputText
        label="Serving Time (±)"
        placeholder={additionalInfo.servingTime}
        onChangeText={setServerTime}
        forgotPassword={false}
        stateText={STATE_TEXT.TEXT_MODAL}
        setError={setError}
      />

      <View style={{flex: 1.5, marginBottom: 30}}>
        <CustomInputText
          label="Nutrition Facts"
          placeholder={additionalInfo.nutritionFacts}
          onChangeText={setServerTime}
          forgotPassword={false}
          stateText={STATE_TEXT.TEXT_MODAL}
          setError={setError}
        />
      </View>
      <CustomInputText
        label="Tags"
        placeholder={additionalInfo.tags}
        onChangeText={setServerTime}
        forgotPassword={false}
        stateText={STATE_TEXT.TEXT_MODAL}
        setError={setError}
      />
      <View style={{flex: 1}}>
        <TouchableOpacity style={styles.buttonPost}>
          <Text style={styles.postText}>Post to Feed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomBodyModal;
