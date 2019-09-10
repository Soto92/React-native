import React, { ReactElement, useRef, useState } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import I18n from './locales';
import Header from '../../components/Header';
import ButtonInstalation from '../../components/ButtonInstalation';
import ButtonMaintenance from '../../components/ButtonMaintenance';
import '../../config/StatusBarConfig'

import styles from './styles';

const Mode= (): ReactElement => {
  const {
    container,
    imageLogo,
    content
  } = styles;

  return (
    <ScrollView style= {container} >
        <Header content = {
            <Image
              style={imageLogo}
              source={require('../../assets/images/logo.png')}
            />
          }
        />

      <View style= {content}>
          <View><ButtonInstalation
          title={I18n.t('INSTALATION_BUTTON')} 
          onPress={() => this.props.navigation.navigate('Instalation')}
          
          /></View>
          <View><ButtonMaintenance
          title={I18n.t('MAINTENANCE_BUTTON')} 

          /></View>
      </View>
     
    </ScrollView>
  );
};


export default Mode;