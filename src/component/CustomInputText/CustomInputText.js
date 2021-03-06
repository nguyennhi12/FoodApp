import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './CustomInputText.styles';
import CustomTextError from '../CustomTextError/CustomTextError';
import {useValidate} from '../../hook/customUseValidate';
import {STATE_TEXT} from '../../constants';
const CustomInputText = props => {
  const [value, setValue] = useState(props?.value);
  const {error} = useValidate({
    text: value,
    stateText: props.stateText,
  });
  useEffect(() => {
    props.setError(error.isError);
    props.onChangeText(value);
  }, [value]);
  console.log('NhiNTY5 CustomInputText RENDER');
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.textLabel}>{props.label}</Text>
        {props?.forgotPassword && (
          <TouchableOpacity>
            <Text style={styles.textLabel}>Forgot Password?</Text>
          </TouchableOpacity>
        )}
      </View>
      <TextInput
        placeholder={props.placeholder}
        onChangeText={text => setValue(text)}
        style={styles.textInput}
        value={props?.value}
        secureTextEntry={props.stateText == STATE_TEXT.PASSWORD ? true : false}
      />
      <CustomTextError labelError={error.textError} />
    </View>
  );
};

export default React.memo(CustomInputText);
