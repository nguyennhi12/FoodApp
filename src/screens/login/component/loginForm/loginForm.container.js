import React, {useState, useEffect, useCallback, useContext} from 'react';
import LoginForm from './loginForm';
import {ASYNC_STORAGE, ROUTER} from '../../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {MyContext} from '../../../../../App';
const LoginFormContainer = () => {
  const context = useContext(MyContext);
  const [email, setEmail] = useState(context.email);
  const [password, setPassword] = useState('');
  const [isEmailError, setIsEmailError] = useState(true);
  const [isPassWordError, setIsPasswordError] = useState(true);
  const [isEnableButton, setIsEnableButton] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    setEmail(context.email);
  }, [context.email]);
  useEffect(() => {
    isEmailError || isPassWordError
      ? setIsEnableButton(false)
      : setIsEnableButton(true);
  }, [isEmailError, isPassWordError]);
  // ms thử
  const onLogin = useCallback(async () => {
    const account = JSON.stringify({
      account: {email: email, password: password},
    });
    await AsyncStorage.setItem(ASYNC_STORAGE.ACCOUNT, account);
    navigation.replace(ROUTER.RECIPE_FEED);
  }, [email, password]);
  console.log('NhiNTY5 LoginFormContainer RENDER');
  return (
    <LoginForm
      email={email}
      setEmail={setEmail}
      setPassword={setPassword}
      errorEmail={isEmailError}
      setIsPasswordError={setIsPasswordError}
      setIsEmailError={setIsEmailError}
      isEnableButton={isEnableButton}
      onClick={onLogin}
    />
  );
};
export default React.memo(LoginFormContainer);
