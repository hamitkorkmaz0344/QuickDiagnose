import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Ekranlar
import Login from './Screens/Login';
import Signupp from './Screens/Signupp';
import Home from './Screens/Home';
import KişiselBilgiler from './Screens/kişiselbilgiler';
import Hastalıklarım from './Screens/hastalıklarım';
import Hastaneler from './Screens/hastaneler';
import Doktorlar from './Screens/doktorlar';
import Radyoloji from './Screens/radyoloji';
import TahlilSonuçları from './Screens/Tahlilsonucları';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Ana Sayfa" component={Home} />
      <Drawer.Screen name="Kişisel Bilgiler" component={KişiselBilgiler} />
      <Drawer.Screen name="Hastalıklarım" component={Hastalıklarım} />
      <Drawer.Screen name="Hastaneler" component={Hastaneler} />
      <Drawer.Screen name="Doktorlar" component={Doktorlar} />
      <Drawer.Screen name="Radyoloji" component={Radyoloji} />
      <Drawer.Screen name="Tahlil Sonuçları" component={TahlilSonuçları} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signupp" component={Signupp} />
        <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
