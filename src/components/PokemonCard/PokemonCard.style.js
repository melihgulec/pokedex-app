import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 110,
    borderRadius: 10,
    backgroundColor: 'crimson',
    padding: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  hashText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  nameText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});
