import {StyleSheet} from 'react-native';
import setScale from '../../helper/Scale';
import {COLOR} from '../../assets/color';
export const styles = props =>
  StyleSheet.create({
    container: {
      height: 50,
      backgroundColor: COLOR.BUTTON,
      width: setScale(390),
      borderRadius: setScale(10),
      justifyContent: 'center',
      alignItems: 'center',
      opacity: props.isEnableButton ? 0.2 : 1,
    },
    textLabel: {
      color: 'white',
      fontFamily: 'nunito_bold',
      fontSize: setScale(16),
    },
  });
