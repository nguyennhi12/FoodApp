import React, {useEffect, useState} from 'react';
import {
  View,
  Modal,
  DeviceEventEmitter,
  Text,
  TouchableOpacity,
} from 'react-native';
import {EVENT} from '../../constants';
import {styles} from './CustomModalDimesion.styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
const CustomModalDimesion = () => {
  const [visible, setVisible] = useState(false);
  const [option, setOption] = useState({});
  const [detail, setDetail] = useState();
  useEffect(() => {
    const listener = DeviceEventEmitter.addListener(
      EVENT.MODAL,
      ({visible, option, detail}) => {
        setVisible(visible), setOption(option);
        setDetail(detail);
      },
    );
    return () => listener.remove();
  }, []);
  const onCancel = () => {
    setVisible(false);
  };
  console.log('NhiNTY5 CustomModalDimesion RENDER');
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* header */}
            <View style={styles.headerModal}>
              {option?.title && (
                <Text style={styles.modalTextHeader}>{option?.title}</Text>
              )}
              <TouchableOpacity onPress={onCancel}>
                <IconAntDesign name="close" size={30} />
              </TouchableOpacity>
            </View>

            {/* detail */}
            <View style={styles.detailModal}>
              {option.detailComponent && option.detailComponent()}
            </View>
            {/* button */}
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default CustomModalDimesion;

export const ShowNotification = ({visible, option}) => {
  DeviceEventEmitter.emit(EVENT.MODAL, {visible: visible, option});
};
