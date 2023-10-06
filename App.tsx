import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import store from "./store";
import TabNavigator from './navigator/TabNavigator';

const App = () => {
  return (
    <NavigationContainer >
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    </NavigationContainer >
  );
}

export default App;
