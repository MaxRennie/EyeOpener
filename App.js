import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, imageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/backgrounds/bg.svg')} style={styles.imageBackground}>

      </ImageBackground>
      <StatusBar hidden={true} />
    </View>
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
