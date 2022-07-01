import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
const DisconnectInternet = () => {
  return (
    <View
      style={{
        position: 'absolute',
        height: 20,
        width: 400,
        top: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 100,
        alignItems: 'center',
      }}>
      <Text style={{color: 'white'}}>Connect is inconnect</Text>
    </View>
  );
};

const useCheckConnectInternet = WrapperView => props => {
  const [stateInternet, setStateInternet] = useState(false);
  useEffect(() => {
    const listernerConnectInternet = NetInfo.addEventListener(state => {
      setStateInternet(state.isConnected);
    });
    return () => {
      listernerConnectInternet();
    };
  }, []);
  return stateInternet ? (
    <WrapperView {...props} />
  ) : (
    <>
      <DisconnectInternet />
      <WrapperView {...props} />
    </>
  );
};
export default useCheckConnectInternet;
