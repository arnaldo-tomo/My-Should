import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Views/Home';
import Post from '../Views/Post';
import detaltes from '../Views/detalhes';
import Loading from '../Views/loading';

const Router = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='carregameto' >
                <Stack.Screen name="carregameto" component={Loading} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                {/* <Stack.Screen name="Detalhes" component={detaltes} /> */}
                <Stack.Screen name="Post" component={Post} options={{ headerBlurEffect: true }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;