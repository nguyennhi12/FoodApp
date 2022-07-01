import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Switch} from 'react-native-switch';
import {COLOR} from '../../assets/color';
import {styles} from './CustomItemWithSwitch.style';
const CustomItemWithSwitch = props => {
  const [isActive, setIsActive] = useState(props.isActive);
  const toggleSwitch = () => setIsActive(previousState => !previousState);
  console.log('NhiNTY5 CustomItemWithSwitch RENDER');
  return (
    <View style={styles.container}>
      <Text style={props.propStyle}>{props.title}</Text>
      <Switch
        value={isActive}
        onValueChange={toggleSwitch}
        activeText=""
        inActiveText=""
        circleSize={16}
        barHeight={20}
        circleBorderWidth={0}
        backgroundActive={COLOR.BUTTON}
        backgroundInactive="#CCCCCC"
        circleActiveColor="white"
        circleInActiveColor="white"
        circleBorderActiveColor="red"
        circleBorderInactiveColor="red"
        //Độ dài của thanh trượt
        switchWidthMultiplier={2.5}
        //style của vòng tron phía trong
        innerCircleStyle={isActive ? {marginRight: 3} : {marginLeft: 3}}
      />
    </View>
  );
};
export default CustomItemWithSwitch;
