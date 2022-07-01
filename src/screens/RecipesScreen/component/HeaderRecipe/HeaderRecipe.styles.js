import {StyleSheet} from 'react-native';
import setScale from '../../../../helper/Scale';
export const styles = StyleSheet.create({
  container: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: setScale(10),
  },
  styleEmail: {
    flexDirection: 'row',
  },
  styleCaiNap: {
    marginRight: setScale(40),
  },
  sizeIcon: setScale(25),
});
