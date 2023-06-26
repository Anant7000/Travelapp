
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/HomeScreen';



import Signup from './src/Signup';
import WelcomeScreen from './src/WelcomeScreen';
import LoginScreen from './src/LoginScreen';
import BookingScreen from './src/BookingScreen';
import DetailScreen from './src/DetailScreen';
import TictakScreen from './src/TictakScreen';
import PlacesScreen from './src/PlacesScreen';

const Stack = createNativeStackNavigator();

function App() {

  const [welcome, setwelcome] = useState(true)

  //  useEffect(() => {
  //     setTimeout(() => {
  //       setwelcome(false);
  //       }, 2000);
  //   }, [])

  // {welcome ?  <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} /> : null}

  return (
    <NavigationContainer>
      <Stack.Navigator >
        {/* <Stack.Screen name="Welco" component={TictakScreen} options={{headerShown: false}} />  */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Places" component={PlacesScreen} options={{ headerShown: false }} />

        <Stack.Screen name="Book" component={BookingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Sign" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />

        <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />



      </Stack.Navigator>

    </NavigationContainer>
  );
}
export default App;


/*<NavigationContainer>
<Drawer.Navigator initialRouteName="Home">
  <Drawer.Screen name="Home" component={HomeScreen} />
  <Drawer.Screen name="Provider" component={Provider} />
  <Drawer.Screen name="Recharge" component={Recharge} />
</Drawer.Navigator>
</NavigationContainer>*/