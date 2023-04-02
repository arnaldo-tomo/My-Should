import * as React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Views/Home';
import Post from '../Views/Post';
import { Center, VStack, HStack, NativeBaseProvider, Button, Heading, Box } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import detaltes from '../Views/detalhes';

const load = ({ navigation }) => {
    return (
        <NativeBaseProvider>

            <VStack paddingTop={"100"} justifyContent={'spacer-between'} justifyItems={'center'} flex={'1'} bgColor={'white'}>
                <Center>
                    {/* <Text>Centro</Text> */}
                    <Image style={{
                        height: 300,
                        width: 400,
                    }}
                        source={require('../assets/gb-notebook.gif')} alt="logo" />
                    <Heading>My Should</Heading>

                    <Text style={{ textAlign: 'center', padding: 2 }}>O site Tenor.com foi traduzido com base na definição de idioma do navegador. Se quiser alterar o idioma</Text>

                    <Button onPress={() => { navigation.navigate('Home') }} position={'absolute'} marginTop={"900"} shadow={'6'} width={"300"} bgColor={'blue.400'}>Get-Start </Button>
                </Center>
            </VStack>


        </NativeBaseProvider >
    )
}
const Router = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="load" component={load} options={{ headerShown: false }} />
                <Stack.Screen name="Detalhes" component={detaltes} />
                <Stack.Screen name="Post" component={Post} options={{ headerBlurEffect: true }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;