import {StyleSheet} from 'react-native';
import {COLOR} from '../../assets/color';
import {FONTS} from '../../assets/customFonts';
import setScale from '../../helper/Scale';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 18,
    backgroundColor: 'white',
  },
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingBottom: setScale(15),
  },
  headerText: {
    fontSize: setScale(15),
    marginLeft: setScale(12),
    fontFamily: FONTS.TEXT_INPUT,
  },
  bigTittle: {
    fontSize: 24,
    fontFamily: FONTS.HEADER,
    color: 'black',
    marginTop: setScale(15),
  },
  editWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: setScale(25),
  },
  avatarStyles: {
    width: setScale(100),
    height: setScale(100),
    borderRadius: setScale(50),
    marginBottom: setScale(10),
  },
  avatarText: {
    fontSize: setScale(16),
    fontFamily: FONTS.HEADER,
    color: COLOR.BUTTON,
  },
  privateInfo: {
    fontSize: setScale(16),
    fontFamily: FONTS.HEADER,
    color: 'black',
    marginBottom: setScale(10),
  },
});
