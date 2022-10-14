import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 100,
    borderRadius:10,
    backgroundColor: 'crimson',
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image: {
    width: 100,
  },
  hashText: {
    fontWeight: 'bold',
  },
  nameText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  }
});
