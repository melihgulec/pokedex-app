import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    flex: 1,
    padding: 25,
  },
  pokemonNameText: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
  },
  pokemonIdText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  detailContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 35,
    paddingHorizontal: 25,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    top: -200,
    right: Dimensions.get('window').width / 5,
  },
});
