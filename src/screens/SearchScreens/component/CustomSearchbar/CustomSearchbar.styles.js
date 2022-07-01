import {StyleSheet} from 'react-native';
import setScale from '../../../../helper/Scale';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleIconSearch: {
    backgroundColor: 'white',
    width: setScale(380),
    height: setScale(60),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: setScale(10),
    shadowColor: 'black',
    shadowRadius: setScale(10),
    elevation: setScale(5),
    shadowOffset: setScale(10),
  },
});
