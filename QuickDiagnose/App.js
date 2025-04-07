import Login from './Screens/Login';
import Signupp from './Screens/Signupp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="Signupp" component={Signupp}
        options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
