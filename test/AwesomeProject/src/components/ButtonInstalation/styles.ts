import { StyleSheet, Dimensions, Platform } from 'react-native';

export default StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: .2,
    elevation: 2,
    shadowOffset: { width: 1, height: 1 }
  },

  pressedButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: .2,
    elevation: 2,
    shadowOffset: { width: 1, height: 1 }
  },

  textStyle: {
    color: 'white',
    fontSize: 14,
    textTransform: 'uppercase',
    fontFamily: 'encodesans',
    fontWeight: '500',
  },
});
