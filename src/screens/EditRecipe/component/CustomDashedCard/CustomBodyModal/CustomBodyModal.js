import React, {useState} from 'react';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import {COLOR} from '../../../../../assets/color';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {STATE_TEXT} from '../../../../../constants';
import {styles} from './CustomBodyModal.styles';
const CustomBodyModal = props => {
  const dataImage = props.dataImage;
  const [serverTime, setServerTime] = useState();
  const [error, setError] = useState();
  const [active, setActive] = useState(true);
  const renderItem = item => {
    return (
      <Image source={{uri: item.item.image}} style={styles.styleImageNum23} />
    );
  };
  console.log('NhiNTY5 CustomBodyModalCustomDashedCard RENDER');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
      }}>
      <View
        style={{
          width: 350,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}>
        <Text style={styles.styleTextImage}>Image ({dataImage.length})</Text>
        <Text style={styles.styleTextViewAll}>View All</Text>
      </View>
      <View style={{height: 100}}>
        <FlatList
          data={dataImage}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View
        style={{
          width: 350,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
          marginTop: 10,
        }}>
        {active ? (
          <TouchableOpacity
            style={[styles.circleOutSide, {borderColor: COLOR.BUTTON}]}
            onPress={() => setActive(!active)}>
            <View
              style={[
                styles.circleInSide,
                {backgroundColor: COLOR.BUTTON},
              ]}></View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.circleOutSide}
            onPress={() => setActive(!active)}>
            <View style={styles.circleInSide}></View>
          </TouchableOpacity>
        )}
        <Text style={{marginLeft: 20}}>Set as Cover</Text>
      </View>
      <View
        style={{
          width: 350,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
          marginTop: 10,
        }}>
        <IconAntDesign name="delete" size={20} />
        <Text style={{marginLeft: 20}}>Remove</Text>
      </View>
      <TouchableOpacity style={styles.dashedCover}>
        <IconAntDesign name="plus" size={20} style={{marginHorizontal: 19}} />
        <Text style={styles.contentText}>Upload Images or Open Camera</Text>
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <TouchableOpacity style={styles.buttonPost}>
          <Text style={styles.postText}>Save Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomBodyModal;
