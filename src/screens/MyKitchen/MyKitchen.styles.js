import {StyleSheet} from 'react-native';
import {FONTS} from '../../assets/customFonts';
import {COLOR} from '../../assets/color';
import setScale from '../../helper/Scale';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: setScale(10),
    marginRight: setScale(10),
  },
  styleSetting: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stylesIcon: {
    alignSelf: 'center',
    marginRight: setScale(5),
  },
  sizeIcon: setScale(20),
  stylesHeader: {
    fontFamily: FONTS.HEADER,
    fontSize: setScale(24),
    color: 'black',
  },
  stylesSetting: {
    fontFamily: FONTS.HEADER,
    fontSize: setScale(16),
    color: COLOR.BUTTON,
  },
  info: {
    flex: 3,
    backgroundColor: 'yellow',
  },
  option: {
    flex: 3,
  },
  listShow: {
    flex: 10,
    backgroundColor: 'pink',
  },
  stylesLine: {
    height: setScale(1),
    backgroundColor: COLOR.BOTTOM_LINE,
    width: setScale(400),
    marginLeft: setScale(10),
  },
});
