import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Views/Home';
import Post from '../Views/Post';
const Router = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Post" component={Post} options={{ title: 'Voltar', headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;