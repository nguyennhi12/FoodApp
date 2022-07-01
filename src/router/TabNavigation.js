import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RecipesScreen from '../screens/RecipesScreen/RecipesScreen';
import MyKitchen from '../screens/MyKitchen/MyKitchen';
import SearchScreen from '../screens/SearchScreens/SearchScreen';
function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingLeft: 40,
        backgroundColor: 'white',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{flex: 1}}
            key={label}>
            {isFocused ? (
              label == 'search' ? (
                <Image source={require('../assets/images/Search_Green.jpg')} />
              ) : label == 'nav_2' ? (
                <Image source={require('../assets/images/Nav2_Green.jpg')} />
              ) : (
                <Image
                  source={require('../assets/images/hat-chef-green.jpg')}
                />
              )
            ) : label == 'search' ? (
              <Image source={require('../assets/images/search.jpg')} />
            ) : label == 'nav_2' ? (
              <Image source={require('../assets/images/Nav2.jpg')} />
            ) : (
              <Image source={require('../assets/images/chef-hat.jpg')} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      initialRouteName="nav_2">
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="nav_2"
        component={RecipesScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="chef_hat"
        component={MyKitchen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
