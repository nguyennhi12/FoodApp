import {StyleSheet} from 'react-native';
import {FONTS} from '../../../../assets/customFonts';
import setScale from '../../../../helper/Scale';
export const styles = StyleSheet.create({
  container: {
    flex: 3,
    marginLeft: setScale(10),
  },
  styleTitle: {
    fontFamily: FONTS.HEADER,
    color: 'black',
    fontSize: setScale(16),
    margin: setScale(10),
    marginBottom: setScale(10),
  },
  styleFillOption: {
    width: 102,
    height: 27,
    marginRight: 10,
    marginLeft: 10,
  },
  styleTitleInActive: {
    fontFamily: FONTS.HEADER,
    fontSize: setScale(20),
    color: 'gray',
  },
  styleCategory: {
    fontFamily: FONTS.HEADER,
    fontSize: setScale(20),
    color: 'black',
  },
});
