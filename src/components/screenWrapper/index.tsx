import React from 'react';
import {View, StatusBar} from 'react-native';
import {styles} from './styles';

const screenWrapper = (props: any) => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    {props.children}
  </View>
);
export default screenWrapper;
