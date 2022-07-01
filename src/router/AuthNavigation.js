import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTER} from '../constants/index';
import LoginScreen from '../screens/login/loginScreen';
import MainNavigation from './MainNavigation';
import SignUpScreen from '../screens/signUp/signUp';
const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTER.LOGIN}>
      <Stack.Screen
        name={ROUTER.LOGIN}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTER.SIGN_UP}
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTER.RECIPE_FEED}
        component={MainNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default AuthNavigation;
