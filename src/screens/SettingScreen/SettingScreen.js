import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomItemWithSwitch from '../../component/CustomItemWithSwitch/CustomItemWithSwitch';
import {styles} from './SettingScreen.style';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ASYNC_STORAGE, ROUTER} from '../../constants';
const SettingsScreen = () => {
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.goBack();
  };
  const onLogOut = async () => {
    await AsyncStorage.removeItem(ASYNC_STORAGE.ACCOUNT);
    navigation.reset({
      index: 0,
      routes: [{name: ROUTER.AUTH_NAVIGATION}],
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.topFunction}>
        <TouchableOpacity style={styles.goBackWrapper} onPress={onGoBack}>
          <Ionicons name="chevron-back" size={20} />
          <Text style={styles.goBack}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.goBackWrapper, {justifyContent: 'flex-end'}]}
          onPress={onLogOut}>
          <Ionicons
            name="log-out-outline"
            size={20}
            style={{marginRight: 10}}
          />
          <Text style={styles.logOut}>Log out</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Settings</Text>

      <Text style={styles.pushNoti}>Push Notification</Text>

      <CustomItemWithSwitch
        title="Notify me for followers"
        isActive={false}
        propStyle={styles.toggleText}
      />

      <CustomItemWithSwitch
        title="When someone send me a message"
        isActive={true}
        propStyle={styles.toggleText}
      />
      <CustomItemWithSwitch
        title="When someone do live cooking"
        isActive={true}
        propStyle={styles.toggleText}
      />
      <View style={styles.separator}></View>

      <Text style={styles.pushNoti}>Privacy Settings</Text>

      <CustomItemWithSwitch
        title="Followers can see my saved recipes"
        isActive={true}
        propStyle={styles.toggleText}
      />

      <Text style={styles.smallText}>
        If disabled, you won’t be able to see recipes saved by other profiles.
        Leave this enabled to share your collected recipes to others.{' '}
        <Text style={styles.smallBold}>why this matter?</Text>
      </Text>

      <CustomItemWithSwitch
        title="Followers can see profiles I follow"
        isActive={true}
        propStyle={styles.toggleText}
      />

      <View style={styles.separator}></View>

      <TouchableOpacity style={styles.changePassword}>
        <Text style={styles.changeText}>Change Password</Text>
        <Ionicons name="chevron-forward" size={24} />
      </TouchableOpacity>
    </View>
  );
};
export default SettingsScreen;
