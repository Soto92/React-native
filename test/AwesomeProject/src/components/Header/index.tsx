import React, { ReactElement, useRef, useState } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

interface ButtonProps {
  content:'',
}

const Header = (props: ButtonProps): ReactElement => {
  const { content } = props;
  const { title, imageExit } = styles;

  return(
    <View style= {title}>
        <View>
          {content}
        </View>
        <Image
          style={imageExit}
          source={require('../../assets/images/icoExit.png')}
        />
    </View>
  );
  
}

export default Header;