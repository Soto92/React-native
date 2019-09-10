import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Math.round(Dimensions.get('window').width);

export default StyleSheet.create({
  buttonStyle: {
    height: 40,
    width: deviceWidth - 48,
    marginRight: 24,
    marginLeft: 24,
    borderRadius: 6,
    backgroundColor: '#3a659e',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: .2,
    elevation: 2,
    shadowOffset: { width: 1, height: 1 }
  },

  pressedButton: {
    height: 40,
    width: deviceWidth - 48,
    marginRight: 24,
    marginLeft: 24,
    borderRadius: 6,
    backgroundColor: '#003b6f',
    justifyContent: 'center',
    alignItems: 'center'
  },

  textStyle: {
    color: 'white',
    fontSize: 14,
    textTransform: 'uppercase',
    fontFamily: 'encodesans',
    fontWeight: '500',
  },
});
