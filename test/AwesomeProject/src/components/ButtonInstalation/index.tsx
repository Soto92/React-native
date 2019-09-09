import React, { ReactElement, useState } from 'react';
import { TouchableWithoutFeedback, View, Image, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import styles from './styles';

interface ButtonProps {
  title: string,
  onPress?: Function
}

const ButtonInstalation = (props: ButtonProps): ReactElement => {
  const { title, onPress } = props;
  const { buttonStyle, pressedButton, imageArrow, textStyle } = styles;
  const [isPressed, setPressed] = useState(false);
  const baseColor = '#3a659e';
  const pressedColor = '#80ace0';
  const [pressAnimation] = useState({ from: { backgroundColor: baseColor }, to: { backgroundColor: pressedColor }});
  const [releaseAnimation] = useState({ from: { backgroundColor: pressedColor }, to: { backgroundColor: baseColor }});

  const _handlePress = (): void => {
    if (onPress) onPress();
  };

  const toggleButtonStyle = (): void => setPressed(!isPressed);

  const getButtonStyle = () => {
    if (isPressed) return pressedButton;
    return buttonStyle;
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => _handlePress()}
      onPressIn={() => toggleButtonStyle()}
      onPressOut={() => toggleButtonStyle()}
    >
      <Animatable.View
        style={getButtonStyle()}
        animation={ isPressed ? pressAnimation : releaseAnimation }
        duration={200}
      >
        <Image source={require('../../assets/images/upArrow.png')} style = {imageArrow} />
        <Text style={textStyle}>{title}</Text>
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
};

ButtonInstalation.displayName = 'Button';

export default ButtonInstalation;
