import React, {useState, useEffect, useContext} from 'react';
import SignUpForm from './signUpForm';
import {useNavigation} from '@react-navigation/native';
import {ROUTER} from '../../../constants';
import {UseProvider} from '../../../constants';
import {MyContext} from '../../../../App';
const SignUpFormContainer = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('nhicute');
  const [password, setPassword] = useState('');
  const [isFullNameError, setIsFullNameError] = useState(true);
  const [isEmailError, setIsEmailError] = useState(true);
  const [isPassWordError, setIsPasswordError] = useState(true);
  const [isEnableButton, setIsEnableButton] = useState(false);
  const context = useContext(MyContext);
  const onCreateAccount = () => {
    context.setEmail(email);
    navigation.navigate(ROUTER.LOGIN);
  };
  useEffect(() => {
    isEmailError || isPassWordError || isFullNameError
      ? setIsEnableButton(false)
      : setIsEnableButton(true);
  }, [isEmailError, isPassWordError, isFullNameError]);
  console.log('NhiNTY5 SignUpFormContainer RENDER');
  return (
    <SignUpForm
      setEmail={setEmail}
      setPassword={setPassword}
      setFullName={setFullName}
      setIsFullNameError={setIsFullNameError}
      setIsPasswordError={setIsPasswordError}
      setIsEmailError={setIsEmailError}
      isEnableButton={isEnableButton}
      onCreateAccount={onCreateAccount}
    />
  );
};
export default SignUpFormContainer;
