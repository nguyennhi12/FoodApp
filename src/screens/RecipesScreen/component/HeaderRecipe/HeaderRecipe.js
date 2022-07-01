import React from 'react';
import {View, Image} from 'react-native';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import {styles} from './HeaderRecipe.styles';
const HeaderRecipe = () => {
  console.log('NhiNTY5 HeaderRecipe RENDER');
  return (
    <View style={styles.container}>
      <Image source={require('../../../../assets/images/Logo.png')} />
      <View style={styles.styleEmail}>
        <Image
          source={require('../../../../assets/images/cainap.jpg')}
          style={styles.styleCaiNap}
        />
        <IconFontisto name="email" size={styles.sizeIcon} />
      </View>
    </View>
  );
};
export default HeaderRecipe;
