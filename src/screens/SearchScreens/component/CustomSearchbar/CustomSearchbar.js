import React from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import {styles} from './CustomSearchbar.styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
const CustomSearchbar = () => {
  console.log('NhiNTY5 CustomSearchbar RENDER');
  return (
    <View style={styles.container}>
      <View style={styles.styleIconSearch}>
        <TouchableOpacity>
          <IconAntDesign
            name="search1"
            size={25}
            style={{marginLeft: 5}}
            color="black"
          />
        </TouchableOpacity>

        <TextInput
          placeholder="Search recipe, people, or tag"
          style={{width: 270, marginLeft: 10}}
        />
        <TouchableOpacity>
          <IconAntDesign
            name="menufold"
            size={25}
            style={{marginRight: 5}}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default React.memo(CustomSearchbar);
