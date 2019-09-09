import React, { ReactElement, useRef, useState } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import I18n from './locales';
import ButtonInstalation from '../../components/ButtonInstalation';
import ButtonMaintenance from '../../components/ButtonMaintenance';
import '../../config/StatusBarConfig'

import styles from './styles';

const Mode = (): ReactElement => {
  const {
    container,
    header,
    title,
    imageLogo,
    imageExit,
    content
  } = styles;

  return (
    <ScrollView style= {container} >
      
        <View style= {title}>
        <Image
            style={imageLogo}
            source={require('../../assets/images/logo.png')}
          />
        <Image
          style={imageExit}
          source={require('../../assets/images/icoExit.png')}
        />
        </View>
      
      <View style= {content}>
          <View><ButtonInstalation title='x'
          //title={I18n.t('INSTALATION_BUTTON')} 
          /></View>
          <View><ButtonMaintenance title='y'
          //title={I18n.t('MAINTENANCE_BUTTON')} 
          /></View>
      </View>
     
    </ScrollView>
  );
};

export default Mode;