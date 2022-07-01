import {StyleSheet} from 'react-native';
import setScale from '../../helper/Scale';
import {COLOR} from '../../assets/color';
export const styles = StyleSheet.create({
  container: {
    height: setScale(26),
    backgroundColor: 'white',
    width: setScale(73),
    borderRadius: setScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: setScale(1),
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
