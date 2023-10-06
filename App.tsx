import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParamList } from './types';
import { Provider } from "react-redux";
import store from "./store";
import TabNavigator from './navigator/TabNavigator';
import OnBoardingScreen from './screens/OnBoardingScreen';
import WizardsScreen from './screens/WizardsScreen';
import SpellsScreen from './screens/SpellsScreen';
import IngredientsScreen from './screens/IngredientsScreen';

const Stack = createNativeStackNavigator<StackParamList>();

const App = () => {
  return (
    <NavigationContainer >
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="OnBoarding" options={{ headerShown: false }} component={OnBoardingScreen} />
          <Stack.Screen name="Home" options={{ headerShown: false }} component={TabNavigator} />
          <Stack.Screen name="Wizards" options={{ headerShown: false }} component={WizardsScreen} />
          <Stack.Screen name="Spells" options={{ headerShown: false }} component={SpellsScreen} />
          <Stack.Screen name="Ingredients" options={{ headerShown: false }} component={IngredientsScreen} />
        </Stack.Navigator>

      </Provider>
    </NavigationContainer >
  );
}

export default App;
