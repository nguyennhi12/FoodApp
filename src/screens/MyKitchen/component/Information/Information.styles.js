import {StyleSheet} from 'react-native';
import setScale from '../../../../helper/Scale';
import {COLOR} from '../../../../assets/color';
import {FONTS} from '../../../../assets/customFonts';
export const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  stylesImageAvatar: {
    flex: 1.75,
    width: setScale(100),
    height: setScale(100),
    resizeMode: 'stretch',
    borderRadius: setScale(60),
    marginLeft: setScale(15),
  },
  stylesViewTextInfo: {
    flex: 5,
    height: 100,
    marginRight: setScale(10),
    marginLeft: setScale(15),
    justifyContent: 'center',
  },
  styleNameIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stylesTextName: {
    fontFamily: FONTS.HEADER,
    color: 'black',
    fontSize: setScale(16),
  },
  stylesTextInfo: {
    fontFamily: FONTS.NORMAL,
    marginRight: setScale(30),
  },

  viewFollowLike: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
