import {StyleSheet} from 'react-native';
import setScale from '../../../../helper/Scale';
import {COLOR} from '../../../../assets/color';
import {FONTS} from '../../../../assets/customFonts';

export const styles = StyleSheet.create({
  container: {
    flex: 5,
    borderRadius: 8,
    backgroundColor: 'white',
    paddingHorizontal: setScale(15),
    paddingVertical: setScale(15),
    marginBottom: setScale(20),
  },
  styleTitle: {
    fontFamily: FONTS.HEADER,
    fontSize: setScale(16),
    color: 'black',
  },
  typeAndIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: setScale(5),
  },
  dashedCover: {
    flex: 1,
    borderStyle: 'dashed',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 8,
    opacity: 0.5,
  },
  contentText: {
    fontSize: setScale(16),
    fontFamily: FONTS.LABEL_TEXT,
    color: '#030F09',
  },
  styleViewStep: {
    width: setScale(25),
    height: setScale(25),
    alignItems: 'center',
    justifyContent: 'center',
    margin: setScale(15),
    borderRadius: setScale(30),
    borderWidth: 2,
    borderColor: COLOR.BUTTON,
  },
  styleText: {
    fontFamily: FONTS.TEXT_INPUT,
  },
});
