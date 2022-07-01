import {StyleSheet} from 'react-native';
import setScale from '../../../../helper/Scale';
import {FONTS} from '../../../../assets/customFonts';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  styleNameHour: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: setScale(10),
  },
  styleGroupName: {
    marginLeft: setScale(20),
  },
  styleName: {
    fontFamily: FONTS.HEADER,
    fontSize: setScale(19),
    color: 'black',
  },
  styleHour: {
    fontFamily: FONTS.TEXT_INPUT,
    fontSize: setScale(15),
  },
  styleImage: {
    width: setScale(70),
    height: setScale(70),
    resizeMode: 'stretch',
    borderRadius: setScale(50),
  },
  styleImageSwiper: {
    width: setScale(340),
    height: setScale(365),
    marginRight: setScale(10),
    marginLeft: setScale(10),
    resizeMode: 'stretch',
  },
  styleNameHeart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: setScale(10),
  },
  styleNameDescription: {
    flex: 1.5,
    width: setScale(330),
    alignSelf: 'center',
    color: '#A8A8A8',
  },
  styleTextNameImage: {
    fontFamily: FONTS.HEADER,
    fontSize: setScale(18),
    color: 'black',
    marginBottom: setScale(20),
  },
  styleTextDescription: {
    fontFamily: FONTS.LABEL_TEXT,
    fontSize: setScale(16),
  },
  styleLikeComment: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  styleTextLikeComment: {
    fontFamily: FONTS.LABEL_TEXT,
    color: '#606060',
  },
});
