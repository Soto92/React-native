import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Mode from '../layouts/Mode';

const RouterComponent = () => {
  return (
    <Router>
      <Scene hideNavBar={true} key='root'>
        <Scene component={Mode} initial />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
