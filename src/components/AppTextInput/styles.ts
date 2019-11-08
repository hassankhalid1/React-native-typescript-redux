import {StyleSheet, Platform, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  appInputField: {
    // fleX:1,
    borderColor: '#a9a9a9',
    borderRadius: 4,
    // paddingVertical: 5,
    overflow: 'visible',
    // height: height - parseInt('1000'),
    width: width - 50,
    height: 50,
    fontSize: 16,
  },
  appInputBorderChange: {
    borderColor: '#0087d1',
    borderWidth: 2,
  },
});
