import {StyleSheet} from 'react-native';
import {FONTS} from '../../../../assets/customFonts';
import setScale from '../../../../helper/Scale';
export const styles = StyleSheet.create({
  container: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCreate: {
    width: setScale(345),
    marginTop: setScale(10),
    fontFamily: FONTS.LABEL_TEXT,
    fontSize: setScale(14),
  },
});
