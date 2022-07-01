import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import CustomInputText from '../../../../component/CustomInputText/CustomInputText';
import CustomButton from '../../../../component/CustomButton/CustomButton';
import {styles} from './loginForm.styles';
import {STATE_TEXT} from '../../../../constants';
const LoginForm = props => {
  console.log('NhiNTY5 LoginForm RENDER');
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textCreate}>Please login to continue.</Text>
        <CustomInputText
          label="Email"
          placeholder="huybui@gmail.com"
          onChangeText={text => props.setEmail(text)}
          stateText={STATE_TEXT.EMAIL}
          setError={props.setIsEmailError}
          value={props?.email}
        />
        <CustomInputText
          label="Password"
          placeholder=""
          onChangeText={props.setPassword}
          forgotPassword={true}
          stateText={STATE_TEXT.PASSWORD}
          setError={props.setIsPasswordError}
        />
        <CustomButton
          label="Login"
          isEnableButton={props.isEnableButton}
          onClick={props.onClick}
        />
      </ScrollView>
    </View>
  );
};
export default React.memo(LoginForm);
