import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import HeaderImage from '../../component/headerImage/headerImage';
import LoginFormContainer from './component/loginForm/loginForm.container';
import {styles} from './loginScreen.styles';
import {useNavigation} from '@react-navigation/native';
import {ROUTER} from '../../constants/index';
const LoginScreen = ({route}) => {
  const navigation = useNavigation();
  const onCreateAccount = () => {
    navigation.navigate(ROUTER.SIGN_UP);
  };

  return (
    <View style={styles.container}>
      <HeaderImage textWelCome={'Welcom Back'} />
      <LoginFormContainer navigation={navigation} />
      <View style={styles.optionSignUp}>
        <Text style={styles.textAlready}>New to Scratch?</Text>
        <TouchableOpacity onPress={onCreateAccount}>
          <Text style={styles.textLogin}>Create Account Here?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LoginScreen;
