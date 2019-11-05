import {StyleSheet, Platform, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a212e',
    ...Platform.select({
      ios: {
        paddingTop:
          height === 812 || width === 812 || height === 896 || width === 896
            ? 35
            : 20,
      },
    }),
  },
});
  