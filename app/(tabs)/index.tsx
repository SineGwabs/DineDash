import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Correct import
import HomeScreen from '../../screens/HomeScreen';
import AddMenuItemScreen from '../../screens/AddMenuItemScreen';
import { registerRootComponent } from 'expo';

const Stack = createNativeStackNavigator(); // Use createNativeStackNavigator

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddMenuItem" component={AddMenuItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//Register the main component
registerRootComponent(App);

export default App;
