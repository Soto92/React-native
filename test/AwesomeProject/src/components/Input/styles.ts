import { StyleSheet, Dimensions, Platform } from 'react-native';

const deviceWidth = Math.round(Dimensions.get('window').width);

const buildFocusTextInput = () => {
  return {
    borderWidth: 1,
    borderColor: '#656975',
    borderRadius: 4,
    paddingLeft: 8,
    paddingTop: 4.5,
    paddingBottom: 5.5,
    color: '#656975'
  }
};

const buildBlurTextInput = () => {
  return {
    borderWidth: 1,
    borderColor: '#d7d8dc',
    borderRadius: 4,
    paddingLeft: 8,
    paddingTop: 4.5,
    paddingBottom: 5.5,
    color: '#656975'
  }
};

export const getFocusedTextInputStyle = () => buildFocusTextInput();

export const getBlurTextInputStyle = () => buildBlurTextInput();

export const styles = StyleSheet.create({
  inputStyle: {
    height: 58,
    width: deviceWidth - 48
  },

  labelStyle: {
    color: '#656975',
    fontFamily: 'Encode Sans',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#d7d8dc',
    borderRadius: 4,
    paddingLeft: 8,
    paddingTop: 4.5,
    paddingBottom: 5.5
  }
});
