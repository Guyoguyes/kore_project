import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home/home';
import Feeds from './pages/Feeds/feeds';
import Login from './pages/Login/login';
import { PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
      <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
    {/* <Stack.Screen name='Feeds' component={Feeds} /> */}
  </Stack.Navigator>

      
    </NavigationContainer>
    </PaperProvider>
    
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
