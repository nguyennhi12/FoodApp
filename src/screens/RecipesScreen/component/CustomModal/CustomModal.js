import React, {useMemo, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './CustomModal.styles';
import {SAVE_OPTION} from '../../../../constants';
const CustomModal = props => {
  const [saveTo, setSaveTo] = useState(1);
  const onPressSave = item => {
    saveTo == item.id ? props.setShowModal(false) : setSaveTo(item.id);
  };
  console.log('NhiNTY5 CustomModalRecipesScreen RENDER');
  return (
    <Modal visible={props.showModal} transparent>
      <View style={styles.outsideWrapper}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Save to</Text>
            <TouchableOpacity onPress={() => props.setShowModal(false)}>
              <Ionicons name="close" size={20} color="lightgrey" opacity={1} />
            </TouchableOpacity>
          </View>
          {SAVE_OPTION.map(item => (
            <TouchableOpacity
              style={styles.western}
              key={item.id}
              onPress={() => onPressSave(item)}>
              <Text
                style={[
                  styles.text,
                  saveTo == item.id ? styles.activeTab : {},
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.addCook}>
            <Ionicons name="add" size={20} color="#30BE76" />
            <Text style={styles.addCookText}>Add New Cookbook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default React.memo(CustomModal);
