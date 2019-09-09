import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ecedf1'
  },

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

  imageLogo: {
    width: 150,
    height: 34,
    marginLeft: 10,
  },

  imageExit: {
    width: 25,
    height: 30,
    marginRight: 10,
  },

  content: {
    marginTop: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  }

});


