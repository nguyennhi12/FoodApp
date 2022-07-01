import {StyleSheet} from 'react-native';
import {COLOR} from '../../assets/color';
import {FONTS} from '../../assets/customFonts';
import setScale from '../../helper/Scale';
export const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    flexDirection: 'row',
  },
  itemOption: {
    flex: 1,
    marginRight: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  styleText: {
    fontFamily: FONTS.HEADER,
    fontSize: setScale(18),
    color: 'black',
  },
  styleTextInactive: {
    fontFamily: FONTS.HEADER,
    fontSize: setScale(18),
    color: 'gray',
  },
  styleContainerTab: {
    backgroundColor: '#F2F2F2',
    borderBottomWidth: 1,
    borderColor: COLOR.BOTTOM_LINE,
    borderTopWidth: 1,
  },
  extTab: {
    fontFamily: FONTS.HEADER,
    fontSize: setScale(16),
  },

  tabBarUnderlineStyle: {
    backgroundColor: COLOR.BUTTON,
  },

  tabStyle: {
    alignItems: 'center',
  },
});
