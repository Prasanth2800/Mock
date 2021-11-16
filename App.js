import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Labour from './src/screens/Labour';
import Labour1 from './src/screens/Labour1';
import Labour2 from './src/screens/Labour2';
import Labour3 from './src/screens/Labour3';
import Labour4 from './src/screens/Labour4';
import Labour5 from './src/screens/Labour5';
import Labour6 from './src/screens/Labour6';
import Labour7 from './src/screens/Labour7';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Labour'>
        <Stack.Screen name="Labour" component={Labour}/>
        <Stack.Screen name="Labour1" component={Labour1}/>
        <Stack.Screen name="Labour2" component={Labour2}/>
        <Stack.Screen name="Labour3" component={Labour3}/>
        <Stack.Screen name="Labour4" component={Labour4}/>
        <Stack.Screen name="Labour5" component={Labour5}/>
        <Stack.Screen name="Labour6" component={Labour6}/>
        <Stack.Screen name="Labour7" component={Labour7}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

