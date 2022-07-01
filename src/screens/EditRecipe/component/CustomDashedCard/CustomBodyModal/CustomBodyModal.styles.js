import {StyleSheet} from 'react-native';
import {COLOR} from '../../../../../assets/color';
import {FONTS} from '../../../../../assets/customFonts';
import setScale from '../../../../../helper/Scale';
export const styles = StyleSheet.create({
  buttonPost: {
    width: setScale(360),
    height: setScale(50),
    backgroundColor: COLOR.BUTTON,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: setScale(20),
    borderRadius: setScale(8),
  },
  postText: {
    fontSize: setScale(16),
    fontFamily: FONTS.HEADER,
    color: 'white',
  },
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
  circleOutSide: {
    width: setScale(15),
    height: setScale(15),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLOR.BUTTON,
    borderRadius: setScale(7.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleInSide: {
    width: setScale(7),
    height: setScale(7),
    borderWidth: setScale(1),
    borderRadius: setScale(3.5),
    borderColor: 'white',
    backgroundColor: 'white',
  },
  dashedCover: {
    width: setScale(360),
    height: setScale(50),
    borderStyle: 'dashed',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: setScale(8),
    opacity: 0.5,
    marginBottom: setScale(10),
  },
  styleTextViewAll: {
    color: COLOR.BUTTON,
    fontFamily: FONTS.HEADER,
  },
  styleTextImage: {
    color: 'black',
    fontFamily: FONTS.HEADER,
  },
});
