import {StyleSheet} from 'react-native';
import {COLOR} from '../../../../../assets/color';
import {FONTS} from '../../../../../assets/customFonts';
import setScale from '../../../../../helper/Scale';
export const styles = StyleSheet.create({
  buttonPost: {
    width: setScale(360),
    height: setScale(50),
    backgroundColor: COLOR.BUTTON,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: setScale(20),
    borderRadius: setScale(8),
  },
  postText: {
    fontSize: setScale(16),
    fontFamily: FONTS.HEADER,
    color: 'white',
  },
});
