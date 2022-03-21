import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import ActorScreen from './src/screens/ActorScreen';
import ShowScreen from './src/screens/ShowScreen';

export default function App() {
  const Stack = createStackNavigator();

  return (

      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Choose an area of Suffolk:' }} />
          <Stack.Screen name="Bury St Edmunds" component={BuryStEdmundsScreen} />
          <Stack.Screen name="Felixstowe" component={FelixstoweScreen} />
        </Stack.Navigator>
        <StatusBar hidden={true} />
      </NavigationContainer >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
