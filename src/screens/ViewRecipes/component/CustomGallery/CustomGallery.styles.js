import {StyleSheet} from 'react-native';
import setScale from '../../../../helper/Scale';
import {COLOR} from '../../../../assets/color';
import {FONTS} from '../../../../assets/customFonts';

export const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    borderRadius: 8,
    alignSelf: 'center',
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
  styleImageNum1: {
    width: setScale(320),
    height: setScale(125),
  },
  styleImageNum23: {
    width: setScale(103),
    height: setScale(98),
    marginRight: setScale(20),
  },
  styleImageNum4: {
    width: setScale(103),
    height: setScale(98),
  },
  styleImageNum4Opacity: {
    width: setScale(103),
    height: setScale(98),
    opacity: 0.2,
  },
  styleTextPlus: {
    position: 'absolute',
    zIndex: setScale(103),
    fontSize: setScale(16),
    fontFamily: FONTS.HEADER,
  },
});
