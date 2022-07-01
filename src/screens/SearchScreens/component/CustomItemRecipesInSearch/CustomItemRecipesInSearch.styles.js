import {StyleSheet} from 'react-native';
import {FONTS} from '../../../../assets/customFonts';
import setScale from '../../../../helper/Scale';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: setScale(10),
  },

  styleImage: {
    width: setScale(120),
    height: setScale(140),
    resizeMode: 'stretch',
  },
  styleText: {
    width: setScale(120),
    fontFamily: FONTS.LABEL_TEXT,
    fontSize: setScale(16),
    color: 'black',
  },
});
