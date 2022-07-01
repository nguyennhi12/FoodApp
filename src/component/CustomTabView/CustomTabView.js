import React, {useState} from 'react';
import {Tab, TabView} from '@rneui/themed';
import {View, Text} from 'react-native';
import {COLOR} from '../../assets/color';
import {styles} from './CustomTabView.styles';
import CustomFlatListRecipes from '../CustomFlatListRecipes/CustomFlatListRecipes';
const CustomTabView = props => {
  const [index, setIndex] = useState(0);
  const optionMyKitchen = props.optionMyKitchen;
  console.log('NhiNTY5 CustomTabView RENDER');
  return (
    <View style={{flex: 10}}>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: COLOR.BUTTON,
          height: 3,
        }}>
        {optionMyKitchen.map(item => (
          <Tab.Item
            title={`${item.num} \n${item.name}`}
            titleStyle={active =>
              active ? styles.styleText : styles.styleTextInactive
            }
            containerStyle={styles.styleContainerTab}
            key={item.id}
          />
        ))}
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        {optionMyKitchen.map(item => (
          <View style={{flex: 1}} key={item.id}>
            <CustomFlatListRecipes data={item.data} />
          </View>
        ))}
      </TabView>
    </View>
  );
};
export default CustomTabView;
