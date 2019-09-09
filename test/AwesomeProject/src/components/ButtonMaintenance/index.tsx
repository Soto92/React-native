import React, { ReactElement, useState } from 'react';
import { TouchableWithoutFeedback, Image, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import styles from './styles';

interface ButtonProps {
  title: string,
  onPress?: Function
}

const ButtonMaintenance = (props: ButtonProps): ReactElement => {
  const { title, onPress } = props;
  const { buttonStyle, pressedButton, imageTool, textStyle } = styles;
  const [isPressed, setPressed] = useState(false);
  const baseColor = '#ffffff';
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
        <Image source={require('../../assets/images/Setting.png')} style = {imageTool} />
        <Text style={textStyle}>{title}</Text>
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
};

ButtonMaintenance.displayName = 'Button';

export default ButtonMaintenance;
