import React from 'react';
import {View, Image, Text, TextInput, ImageBackground} from 'react-native';
import {styles} from './headerImage.styles';
const HeaderImage = props => {
  console.log('NhiNTY5 HeaderImage RENDER');
  return (
    <ImageBackground
      source={require('../../assets/images/imageLogin.jpg')}
      style={styles.imageHeader}
      imageStyle={styles.imageHeader.imageStyles}>
      <View style={styles.imageHeader.logoImage}>
        <Image source={require('../../assets/images/Logo.png')} />
      </View>
      <View style={styles.imageHeader.textWelCome}>
        <Text style={styles.imageHeader.textWelCome.customText}>
          {props.textWelCome}
        </Text>
      </View>
    </ImageBackground>
  );
};
export default HeaderImage;
