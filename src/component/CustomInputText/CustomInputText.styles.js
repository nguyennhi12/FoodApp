import {StyleSheet} from 'react-native';
import setScale from '../../helper/Scale';
import {COLOR} from '../../assets/color';
import {FONTS} from '../../assets/customFonts';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: setScale(345),
    marginTop: setScale(5),
  },
  textLabel: {
    fontFamily: FONTS.LABEL_TEXT,
    fontSize: setScale(14),
  },
  textInput: {
    fontFamily: FONTS.TEXT_INPUT,
    fontSize: setScale(16),
    color: 'black',
    borderBottomWidth: setScale(1),
    borderBottomColor: COLOR.BOTTOM_LINE,
  },
});
