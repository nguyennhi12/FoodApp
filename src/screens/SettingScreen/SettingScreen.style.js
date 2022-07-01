import {StyleSheet} from 'react-native';
import {COLOR} from '../../assets/color';
import {FONTS} from '../../assets/customFonts';
import setScale from '../../helper/Scale';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: setScale(21),
    paddingTop: setScale(35),
    backgroundColor: 'white',
  },
  topFunction: {
    flex: 0.5,
    flexDirection: 'row',
  },
  goBackWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  goBack: {
    fontSize: setScale(16),
    fontFamily: FONTS.LABEL_TEXT,
    color: '#767676',
  },
  logOut: {
    fontSize: setScale(16),
    fontFamily: FONTS.HEADER,
    color: COLOR.BUTTON,
  },
  title: {
    flex: 1,
    fontSize: setScale(24),
    lineHeight: setScale(32),
    fontFamily: FONTS.HEADER,
    color: 'black',
    marginTop: setScale(15),
    marginBottom: setScale(20),
  },
  pushNoti: {
    fontSize: setScale(14),
    fontFamily: FONTS.LABEL_TEXT,
    color: '#606060',
    marginBottom: 20,
  },
  toggleText: {
    fontSize: setScale(16),
    fontFamily: FONTS.LABEL_TEXT,
    color: 'black',
  },
  separator: {
    height: 1,
    backgroundColor: '#E6E6E6',
    marginBottom: 20,
    opacity: 0.2,
  },
  smallText: {
    // fontSize: SMALLEST,
    fontFamily: FONTS.HEADER,
    // color: MOREGREYTEXT,
    marginBottom: 20,
  },
  smallBold: {
    // fontSize: SMALLEST,
    // fontFamily: BOLD,
    // color: GREEN,
  },
  changePassword: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  changeText: {
    fontSize: setScale(16),
    fontFamily: FONTS.LABEL_BUTTON,
    color: 'black',
  },
});
