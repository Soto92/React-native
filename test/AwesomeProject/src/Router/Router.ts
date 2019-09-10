import Mode from '../layouts/Mode';
import Instalation from '../layouts/Instalation';
import { createStackNavigator } from 'react-native-navigation';


const RootStack = createStackNavigator(
  {
    Mode: Mode,
    Instalation: Instalation,
  },
  {
    initialRouteName: 'Mode',
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
