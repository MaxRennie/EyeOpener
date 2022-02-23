import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, imageBackground, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer style={styles.container}>
      <ImageBackground source={require('./assets/backgrounds/bg.svg')} style={styles.imageBackground}>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Choose an area of Suffolk:' }} />
          <Stack.Screen name="Bury St Edmunds" component={BuryStEdmundsScreen} />
          <Stack.Screen name="Felixstowe" component={FelixstoweScreen} />
        </Stack.Navigator>
        <StatusBar hidden={true} />
      </ImageBackground>
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
