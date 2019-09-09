import { StyleSheet, Dimensions, Platform } from 'react-native';

export default StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    width: 200,
    height: 131,
    borderColor: '#3a659e',
    borderWidth: 0.8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: .2,
    elevation: 2,
    shadowOffset: { width: 1, height: 1 }
  },

  pressedButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    width: 200,
    height: 131,
    borderRadius: 12,
    borderColor: '#3a659e',
    borderWidth: 0.8,
    shadowColor: '#000',
    shadowOpacity: .2,
    elevation: 2,
    shadowOffset: { width: 1, height: 1 }
  },

  textStyle: {
    color: '#3a659e',
    fontSize: 14,
    textTransform: 'uppercase',
    fontFamily: 'encodesans',
    fontWeight: '500',
  },
});
