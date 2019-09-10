import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  title: {
    height: 52,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    shadowColor: '#000',
    shadowOpacity: .2,
    elevation: 2,
    shadowOffset: { width: 1, height: 1 }
  },

  imageExit: {
    width: 25,
    height: 30,
    marginRight: 10,
  },
  
});