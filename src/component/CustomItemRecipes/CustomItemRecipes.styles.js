import {StyleSheet} from 'react-native';
import {FONTS} from '../../assets/customFonts';
import setScale from '../../helper/Scale';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: setScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleImage: {
    width: setScale(170),
    height: setScale(100),
    resizeMode: 'stretch',
    borderTopLeftRadius: setScale(10),
    borderTopRightRadius: setScale(10),
  },
  styleName: {
    fontFamily: FONTS.LABEL_BUTTON,
    fontSize: setScale(16),
    paddingBottom: setScale(10),
  },
});
