import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AuthNavigation from './src/router/AuthNavigation';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainNavigation from './src/router/MainNavigation';
import {ASYNC_STORAGE} from './src/constants';
import CustomModalDimesion from './src/component/CustomModalDimesion/CustomModalDimesion';
export const MyContext = React.createContext('');
const App = () => {
  const [account, setAccount] = useState();
  const [emailAuto, setEmailAuto] = useState(null);
  const getAccount = async () => {
    await AsyncStorage.getItem(ASYNC_STORAGE.ACCOUNT, (err, result) => {
      setAccount(JSON.parse(result));
    });
    SplashScreen.hide();
  };
  useEffect(() => {
    getAccount();
  }, []);

  return (
    <MyContext.Provider value={{email: emailAuto, setEmail: setEmailAuto}}>
      <NavigationContainer>
        {!!account ? <MainNavigation /> : <AuthNavigation />}
        <CustomModalDimesion />
      </NavigationContainer>
    </MyContext.Provider>
  );
};

export default App;
