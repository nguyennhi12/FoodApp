import {StyleSheet} from 'react-native';
import {FONTS} from '../../assets/customFonts';
export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: 385,
    height: 450,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    //shadowRadius: 4,
    elevation: 5,
  },
  headerModal: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  },
  detailModal: {
    flex: 8,
  },
  buttonModal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    buttonCancel: {
      backgroundColor: 'green',
      height: 50,
      paddingLeft: 20,
      paddingRight: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
    },
    buttonAccept: {
      backgroundColor: '#FA4A0C',
      height: 50,
      paddingLeft: 20,
      paddingRight: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
    },
  },

  modalTextHeader: {
    fontSize: 16,
    marginLeft: 30,
    fontFamily: FONTS.HEADER,
    color: 'black',
  },
  modalTextButton: {
    fontSize: 20,
    color: 'white',
  },
});
