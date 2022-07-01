import {StyleSheet} from 'react-native';
import {fontSizes} from '../../constants/fontSize';
import {FONT_FAMILY} from '../../constants/fonts';
import {COLOR} from '../../assets/color';
import setScale from '../../helper/Scale';
import {FONTS} from '../../assets/customFonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: setScale(25),
    backgroundColor: 'white',
  },
  goBack: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: setScale(15),
    marginLeft: setScale(12),
    fontFamily: FONTS.TEXT_INPUT,
  },
  bigTitle: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  myRecipeText: {
    fontSize: setScale(24),
    fontFamily: FONTS.HEADER,
    color: 'black',
  },
  addNewWrapper: {
    width: setScale(96),
    height: setScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addNewText: {
    fontSize: setScale(16),
    color: COLOR.BUTTON,
    fontFamily: FONTS.HEADER,
  },
  myDropDown: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: setScale(10),
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 3.41,
    elevation: 2,
    borderWidth: 0,
    fontSize: setScale(16),
    fontFamily: FONTS.TEXT_INPUT,
  },
});

export default styles;
