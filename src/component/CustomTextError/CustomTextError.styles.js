import {StyleSheet} from 'react-native';
import {COLOR} from '../../assets/color';
import setScale from '../../helper/Scale';
export const styles = StyleSheet.create({
  labelError: {
    color: COLOR.LABEL_ERROR,
    width: setScale(345),
    marginTop: setScale(5),
    marginBottom: setScale(5),
  },
});
