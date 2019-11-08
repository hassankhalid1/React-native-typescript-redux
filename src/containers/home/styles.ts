import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#002233',
  },
  innerContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  buttonConatianer: {
    flex: 3,
    width: '90%',
    justifyContent: 'flex-start',
  },
  heading: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    opacity: 0.8,
  },

  button: {
    borderRadius: 5,
    borderWidth: 0,
  },
});
