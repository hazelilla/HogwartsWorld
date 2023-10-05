import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from "react-redux";
import store from "./store";
import HomeScreen from './screens/HomeScreen';
import WizardsScreen from './screens/WizardsScreen';
import SpellsScreen from './screens/SpellsScreen';
import IngredientsScreen from './screens/IngredientsScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Provider store={store}>
        <Tab.Navigator

          screenOptions={({ route }) => ({

            tabBarIcon: ({ focused, color, size }) => {
              let iconName: string = 'default-icon';;

              size = 38
              if (route.name === 'Houses') {
                iconName = focused
                  ? 'home-lightning-bolt-outline'
                  : 'home-lightning-bolt-outline';
              } else if (route.name === 'Wizards') {
                iconName = focused
                  ? 'wizard-hat'
                  : 'wizard-hat';
              } else if (route.name === 'Spells') {
                iconName = focused
                  ? 'magic-staff'
                  : 'magic-staff';
              } else if (route.name === 'Ingredients') {
                iconName = focused
                  ? 'pot-mix'
                  : 'pot-mix';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },

            tabBarStyle: { height: 80, backgroundColor: "purple" },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'black',
            tabBarLabel: ({ focused }) => (
              <Text style={{ fontSize: focused ? 18 : 16, color: focused ? 'white' : 'black' }}>
                {route.name}
              </Text>
            ),

          })}
        >
          <Tab.Screen name="Houses" options={{ headerShown: false }} component={HomeScreen} />
          <Tab.Screen name="Wizards" options={{ headerShown: false }} component={WizardsScreen} />
          <Tab.Screen name="Spells" options={{ headerShown: false }} component={SpellsScreen} />
          <Tab.Screen name="Ingredients" options={{ headerShown: false }} component={IngredientsScreen} />
        </Tab.Navigator>
      </Provider>
    </NavigationContainer >
  );
}

export default App;
