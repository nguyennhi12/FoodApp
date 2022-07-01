import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTER} from '../constants/index';
import TabNavigation from './TabNavigation';
import BrowseMyRecipes from '../screens/BroweMyRecipes/BroweMyRecipes';
import SettingsScreen from '../screens/SettingScreen/SettingScreen';
import NewRecipe from '../screens/NewRecipe/NewRecipe';
import OtherUserProfile from '../screens/OtherUserProfile/OtherUserProfile';
import EditRecipe from '../screens/EditRecipe/EditRecipe';
import ViewRecipes from '../screens/ViewRecipes/ViewRecipes';
import useCheckConnectInternet from '../HOC/CustomHOCInternet';
import EditProfile from '../screens/EditProfile/EditProfile';
import LoginScreen from '../screens/login/loginScreen';
const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTER.TAB_NAVIGATION}>
      <Stack.Screen
        name={ROUTER.TAB_NAVIGATION}
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTER.BROWSE_MY_RECIPES}
        component={BrowseMyRecipes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTER.SETTING_SCREEN}
        component={SettingsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTER.NEW_RECIPE}
        component={NewRecipe}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTER.OTHER_USER_PROFILE}
        component={OtherUserProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTER.EDIT_RECIPES}
        component={EditRecipe}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTER.VIEW_RECIPES}
        component={ViewRecipes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTER.EDIT_PROFILE}
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTER.AUTH_NAVIGATION}
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default useCheckConnectInternet(MainNavigation);
