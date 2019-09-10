import React, { ReactElement, useRef, useState } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import I18n from './locales';
import Header from '../../components/Header';
import ButtonInstalation from '../../components/ButtonInstalation';
import ButtonMaintenance from '../../components/ButtonMaintenance';
import '../../config/StatusBarConfig'

import styles from './styles';

const Instalation = (): ReactElement => {
  const {
    container,
    content
  } = styles;

  return (
    <ScrollView style= {container} >
        <Header content = {
            <Text>
              Back
            </Text>
          }
        />

      <View style= {content}>
          <Text>Componente Instalação!</Text>
      </View>
     
    </ScrollView>
  );
};

export default Instalation;