import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Correct import
import LoginScreen from '../DineDash/screens/LoginScreen';
import HomeScreen from '../DineDash/screens/HomeScreen';
import AddMenuItemScreen from '../DineDash/screens/AddMenuItemScreen';
import MenuScreen from '../DineDash/screens/MenuScreen';
import PaymentScreen from '../DineDash/screens/PaymentScreen';

import { registerRootComponent } from 'expo';

const Stack = createNativeStackNavigator(); // Use createNativeStackNavigator

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddMenuItem" component={AddMenuItemScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

//Register the main component
registerRootComponent(App);

export default App;
