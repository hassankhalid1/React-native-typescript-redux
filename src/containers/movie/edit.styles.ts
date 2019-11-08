import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
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
    flex: 5,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    // borderWidth: 0.56,
    paddingHorizontal: 20,
    color: 'black',
    width: width - 50,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#229df0',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '100%',
    borderWidth: 0,
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 130,
  },
});
