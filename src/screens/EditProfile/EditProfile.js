import React, {useState} from 'react';
import {Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from './EditProfile.styles';
import CustomButton from '../../component/CustomButton/CustomButton';
import CustomInputText from '../../component/CustomInputText/CustomInputText';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
function EditProfile(props) {
  const [error, setError] = useState();
  const [name, setName] = useState();
  const profile = props.route.params;
  const navigation = useNavigation();
  const onEdit = () => {};
  const onGoBack = () => {
    navigation.goBack();
  };
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 50}}>
      <TouchableOpacity style={styles.goBack} onPress={onGoBack}>
        <IconAntDesign name="left" size={14} style={{alignSelf: 'center'}} />
        <Text style={styles.headerText}>Back to my Recipes</Text>
      </TouchableOpacity>
      <Text style={styles.bigTittle}>Edit Profile</Text>

      <TouchableOpacity style={styles.editWrapper}>
        <Image
          source={{uri: profile.imageAvatar}}
          style={styles.avatarStyles}
        />
        <Text style={styles.avatarText}>Edit Profile Picture</Text>
      </TouchableOpacity>

      <CustomInputText
        label="Full Name"
        value={profile.name}
        propStyle={{marginBottom: 20}}
        setError={setError}
        onChangeText={setName}
      />
      <CustomInputText
        label="Bio"
        value={profile.position}
        propStyle={{marginBottom: 30}}
        setError={setError}
        onChangeText={setName}
      />

      <Text style={styles.privateInfo}>Private Information</Text>
      <CustomInputText
        label="Email"
        value="user@email.com"
        propStyle={{marginBottom: 10}}
        setError={setError}
        onChangeText={setName}
      />
      <CustomInputText
        label="Phone"
        value="+1 234 567 89"
        propStyle={{marginBottom: 20}}
        setError={setError}
        onChangeText={setName}
      />
      <CustomButton
        label="Save Profile"
        isEnableButton={true}
        onClick={onEdit}
      />
    </ScrollView>
  );
}
export default EditProfile;
