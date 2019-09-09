import I18n from 'react-native-i18n';
import en_US from './en_US';
import pt_BR from './pt_BR';

I18n.fallbacks = true;

I18n.translations = {
  en: en_US,
  pt: pt_BR
};

export default I18n;
