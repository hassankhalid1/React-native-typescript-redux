import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 60,
    // width: 300,
    margin: 10,
    borderWidth: 0.35,
    borderColor: 'white',
    borderRadius: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    // alignItems: 'center',
  },
  imageContainer: {
    flex: 0,
  },
  nameContainer: {
    flex: 3,
    // backgroundColor: 'blue',
  },
  buttonContainer: {
    flex: 1.5,
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'orange',
    flexDirection: 'row',
  },
  editButton: {
    flex: 1,
    backgroundColor: '#008CBA',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    borderRadius: 5,
    margin: 5,
  },
  deleteButton: {
    flex: 1,
    height: 25,
    borderRadius: 5,
    backgroundColor: '#cc0000',
    justifyContent: 'center',
    margin: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: '400',
  },
  rating: {
    fontWeight: '500',
    color: 'red',
    fontSize: 16,   
  },
  date: {
    opacity: 0.8,
    color: 'white',
  },
  image: {
    height: 50,
    width: 50,
  },
});
