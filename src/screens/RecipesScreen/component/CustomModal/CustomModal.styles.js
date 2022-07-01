import {StyleSheet} from 'react-native';
import setScale from '../../../../helper/Scale';
import {FONTS} from '../../../../assets/customFonts';
import {COLOR} from '../../../../assets/color';
export const styles = StyleSheet.create({
  outsideWrapper: {
    flex: 1,
    backgroundColor: 'rgba(40, 41, 40, 0.3)',
    alignItems: 'center',
  },
  container: {
    width: setScale(286),
    height: setScale(254),
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: setScale(300),
    paddingHorizontal: setScale(20),
    paddingVertical: setScale(20),
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  western: {
    flex: 1,
    justifyContent: 'center',
    fontSize: FONTS.HEADER,
    paddingLeft: setScale(8),
    marginBottom: setScale(10),
  },
  quickLunch: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 14,
    paddingLeft: setScale(11),
  },
  veggies: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 14,
    paddingLeft: setScale(11),
  },
  addCook: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: setScale(14),
    fontFamily: FONTS.LABEL_TEXT,
    color: 'black',
    paddingLeft: setScale(11),
    lineHeight: 42,
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: COLOR.BUTTON,
    opacity: 0.2,
  },
  headerText: {
    color: 'black',
    fontSize: setScale(16),
    fontFamily: FONTS.HEADER,
  },
  addCookText: {
    color: COLOR.BUTTON,
    fontSize: setScale(16),
    fontFamily: FONTS.HEADER,
  },
});
