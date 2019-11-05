import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#002233',

    alignItems: 'center',
  },
  headingText: {
    fontSize: 24,
    marginTop: 20,
    textAlign: 'center',
    opacity: 0.9,
    color: 'white',
    fontWeight: '400',
  },
  innerContainer: {
    flex: 3,
    width: '95%',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 0.56,
    alignContent: 'center',
    paddingHorizontal: 20,
    color: 'black',
    backgroundColor: '#eee',
    borderRadius: 10,
  },
});
