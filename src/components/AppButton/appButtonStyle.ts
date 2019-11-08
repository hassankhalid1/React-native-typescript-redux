import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  buttonStyle: {
    borderRadius: 3,
    borderColor: '#d8d8d8',
    borderWidth: 1,
    backgroundColor: '#229df0',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    ...Platform.select({
      ios: {
        textAlignVertical: 'center',
        // marginBottom: Adjust(10),
      },
      android: {
        textAlignVertical: 'center',
      },
    }),
    textAlignVertical: 'center',
    // fontFamily: 'OpenSans',
  },
});
