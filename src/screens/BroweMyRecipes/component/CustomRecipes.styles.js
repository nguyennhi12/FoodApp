import {StyleSheet} from 'react-native';
import {COLOR} from '../../../assets/color';
import {FONTS} from '../../../assets/customFonts';
import setScale from '../../../helper/Scale';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: 'white',
    marginTop: setScale(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  foodImg: {
    height: setScale(118),
    borderTopLeftRadius: setScale(8),
    borderTopRightRadius: setScale(8),
  },
  foodName: {
    margin: setScale(10),
    marginLeft: setScale(20),
  },
  foodNameText: {
    fontFamily: FONTS.HEADER,
    fontSize: setScale(18),
    color: 'black',
  },
  instruction: {
    height: setScale(26),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: setScale(20),
    marginBottom: setScale(10),
    marginRight: setScale(10),
  },
});
