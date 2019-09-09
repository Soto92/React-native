import React, { ReactElement, useState, forwardRef } from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles, getFocusedTextInputStyle, getBlurTextInputStyle } from './styles';

interface InputProps {
  type?: string,
  label?: string,
  placeholder?: string,
  onChangeText?: Function,
  onSubmitEditing?: Function,
  returnKeyType?: any,
  blurOnSubmit?: boolean,
  textContentType?: any,
  ref?: any
};

const Input = forwardRef((props: InputProps, ref: any) => {
  const {
    label,
    placeholder,
    onChangeText,
    type,
    onSubmitEditing,
    returnKeyType,
    textContentType,
    blurOnSubmit,
   } = props;
  const { inputStyle, labelStyle, textInput } = styles;
  const [textInputStyle, setTextInputStyle] = useState(textInput);

  const _handleTextChange = (text: string): void => {
    if (onChangeText) onChangeText(text);
  };

  const _handleSubmitEditing = () => {
    if (onSubmitEditing) onSubmitEditing();
  };

  return (
    <View style={inputStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        ref={ref}
        style={textInputStyle}
        placeholder={placeholder}
        placeholderTextColor = '#9ea1ac'
        textContentType={textContentType}
        secureTextEntry={type === 'password' ? true : false}
        returnKeyType={returnKeyType}
        onChangeText={(text: string) => _handleTextChange(text)}
        onSubmitEditing={() => _handleSubmitEditing()}
        onFocus={() => setTextInputStyle(getFocusedTextInputStyle())}
        onBlur={() => setTextInputStyle(getBlurTextInputStyle())}
        blurOnSubmit={blurOnSubmit}
      />
    </View>
  );
});

Input.displayName = 'Input'

export default Input;
