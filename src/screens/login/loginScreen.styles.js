import {StyleSheet} from 'react-native';
import setScale from '../../helper/Scale';
import {FONTS} from '../../assets/customFonts';
import {COLOR} from '../../assets/color';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  optionSignUp: {
    flex: 1.75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAlready: {
    fontFamily: FONTS.LABEL_TEXT,
  },
  textLogin: {
    fontFamily: FONTS.HEADER,
    color: COLOR.BUTTON,
  },
});
