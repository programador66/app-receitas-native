import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import MainTab from './MainTab';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="MainTab"
        screenOptions={{
            headerShown: false
          }}
    >
        <Stack.Screen name="Preload" component={ Preload } />
        <Stack.Screen name="MainTab"  component={ MainTab } />
    </Stack.Navigator>
)