import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import LoginPage from './components/LoginPage';
// import { TransitionPresets } from '@react-navigation/native-stack'
import { TransitionPresets, CardStyleInterpolators, TransitionSpecs } from '@react-navigation/stack';

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
        <Stack.Navigator screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS
        }} initialRouteName="Home">
            <Stack.Screen options={{ title: '', headerStyle: {backgroundColor: 'black'}, animation: 'slide_from_right' }} name="Home" component={HomeScreen} />

            <Stack.Screen options={{ animation: 'slide_from_right', headerStyle: { backgroundColor: 'black' }, gestureDirection: 'horizontal', title: '' }} name="Login" component={LoginPage} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}