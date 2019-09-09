import { StyleSheet, Dimensions, Platform } from 'react-native';

export default StyleSheet.create({
  imageArrow:{
    width: 80,
    height: 92,
  },

  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 180,
    height: 180,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: .2,
    elevation: 2,
    shadowOffset: { width: 1, height: 1 }
  },

  pressedButton: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 180,
    height: 180,
    borderRadius: 12,
    backgroundColor: '#000',
    shadowColor: '#000',
    shadowOpacity: .2,
    elevation: 2,
    shadowOffset: { width: 1, height: 1 }
  },

  textStyle: {
    marginTop: 16,
    marginBottom: 16,
    color: 'white',
    fontSize: 18,
    fontFamily: 'encodesans',
    fontWeight: '500',
  },
});
