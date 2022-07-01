import {StyleSheet} from 'react-native';
import {COLOR} from '../../assets/color';
import {FONTS} from '../../assets/customFonts';

import setScale from '../../helper/Scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textTitle: {
    color: 'white',
    fontSize: setScale(24),
    fontFamily: FONTS.HEADER,
    fontWeight: 'bold',
    marginTop: setScale(200),
    marginLeft: setScale(25),
  },
  view: {
    marginHorizontal: setScale(4),
    height: setScale(103),
    width: setScale(103),
    opacity: 0.6,
    position: 'absolute',
  },
  imageBackgroundCook: {
    height: setScale(103),
    width: setScale(103),
    marginHorizontal: setScale(4),
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: setScale(10),
  },
  textTitleHeader: {
    fontFamily: FONTS.LABEL_TEXT,
    fontSize: setScale(16),
    lineHeight: setScale(17),
    color: 'white',
    marginLeft: setScale(15),
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
