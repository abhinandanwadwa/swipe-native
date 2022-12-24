import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import LoginPage from './components/LoginPage';
import { HeaderBackground } from '@react-navigation/elements';


function LogoTitle() {
  return (
    <Image
      style={{ width: 40, height: 40 }}
      source={require('./assets/logoHeader.png')}
    />
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen options={{ title: '', headerStyle: {backgroundColor: 'black'} }} name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginPage} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}