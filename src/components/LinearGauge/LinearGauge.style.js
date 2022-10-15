import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 4,
    backgroundColor: '#eee',
    borderRadius: 15,
  },
  bar: {
    height: 4,
    flex: 1,
    backgroundColor: 'red',
    borderRadius: 15,
    position: 'absolute',
  },
});
