import { StyleSheet, Dimensions, Platform } from 'react-native';

export default StyleSheet.create({
  imageTool: {
    height: 48,
    width: 48,
  },

  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 15,
    width: 180,
    height: 125,
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
    justifyContent: 'flex-end',
    marginTop: 15,
    width: 180,
    height: 125,
    borderRadius: 12,
    borderColor: '#3a659e',
    borderWidth: 0.8,
    shadowColor: '#000',
    shadowOpacity: .2,
    elevation: 2,
    shadowOffset: { width: 1, height: 1 }
  },

  textStyle: {
    marginTop: 10,
    marginBottom: 16,
    color: '#3a659e',
    fontSize: 18,
    fontFamily: 'encodesans',
    fontWeight: '500',
  },
});
