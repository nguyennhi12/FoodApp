import {StyleSheet} from 'react-native';
import setScale from '../../helper/Scale';
import {FONTS} from '../../assets/customFonts';
export const styles = StyleSheet.create({
  imageHeader: {
    flex: 3.5,
    imageStyles: {
      borderBottomRightRadius: setScale(100),
      resizeMode: 'cover',
      opacity: 0.8,
    },

    logoImage: {
      left: setScale(25),
      flex: 1,
      justifyContent: 'center',
    },
    textWelCome: {
      flex: 1,
      customText: {
        left: setScale(25),
        fontFamily: FONTS.HEADER,
        fontSize: setScale(30),
        color: 'black',
      },
    },
  },
});
