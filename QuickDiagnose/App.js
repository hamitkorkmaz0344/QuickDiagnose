import Login from './Screens/Login';
import Signupp from './Screens/Signupp';
import Home from './Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signupp" component={Signupp} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// https://cloud.mongodb.com/v2#/org/6805fa731a6f6b782d1e965e/projects 