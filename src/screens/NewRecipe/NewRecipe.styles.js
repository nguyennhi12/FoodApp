import {StyleSheet} from 'react-native';
import {COLOR} from '../../assets/color';
import {FONTS} from '../../assets/customFonts';
import setScale from '../../helper/Scale';
export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: setScale(25),
    paddingTop: setScale(30),
    paddingBottom: setScale(30),
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
  newRecipe: {
    fontSize: setScale(24),
    color: 'black',
    marginBottom: setScale(35),
    fontFamily: FONTS.HEADER,
  },
  addNewWrapper: {
    height: setScale(65),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  addSquare: {
    width: 62,
    height: 62,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#979797',
    borderStyle: 'dashed',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  recipeNameWrapper: {
    justifyContent: 'flex-start',
  },
  recipeName: {
    fontSize: setScale(14),
    fontFamily: FONTS.LABEL_TEXT,
    // color: GREYTEXT,
  },
  inputText: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  saveToText: {
    fontSize: setScale(14),
    fontFamily: FONTS.LABEL_TEXT,
    // color: MOREGREYTEXT,
    marginBottom: 10,
  },
  dropdownAndRecipe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  dropdown: {
    width: setScale(190),
    height: setScale(50),
    borderRadius: 8,
    marginBottom: 30,
  },
  buttonPost: {
    height: setScale(50),
    backgroundColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: setScale(50),
    borderRadius: setScale(8),
  },
  postText: {
    fontSize: setScale(16),
    fontFamily: FONTS.HEADER,
    color: 'white',
  },
  myDropDown: {
    width: setScale(200),
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
    borderRadius: setScale(8),
  },
  viewButton: {
    height: setScale(50),
    width: setScale(120),
    borderRadius: setScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: setScale(2),
    borderColor: COLOR.BUTTON,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textLabel: {
    color: COLOR.BUTTON,
    fontFamily: 'nunito_bold',
    fontSize: setScale(14),
  },
  colorIcon: COLOR.BUTTON,
});
