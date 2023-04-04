import { NativeBaseProvider, Text, VStack, HStack, Heading, Box, Center, Button, Image, View } from 'native-base';
import React, { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Loading = ({ navigation }) => {

    const fetchUserData = () => {
        var nado = "logado";
        const info = AsyncStorage.setItem('logado', nado)
        navigation.navigate('Home')
    }

    async function checkLoginStatus() {
        const token = await AsyncStorage.getItem('logado');
        if (token) {
            navigation.push('Home')
        }
    }

    useEffect(() => {
        checkLoginStatus();
    }, [])



    return (
        <NativeBaseProvider>


            <View paddingTop={"100"} justifyItems={'center'} flex={1} bgColor={'white'}>
                <Center>
                    {/* <Text>Centro</Text> */}
                    <Image style={{
                        height: 300,
                        width: 400,
                    }}
                        source={require('../assets/gb-notebook.gif')} alt="logo" />
                    <Heading fontWeight={'extrabold'}>My Should</Heading>

                    <Text style={{ textAlign: 'center', padding: 2 }}>O site Tenor.com foi traduzido com base na definição de idioma do navegador. Se quiser alterar o idioma</Text>

                </Center>
                <Button style={{ alignSelf: 'center' }} onPress={fetchUserData}
                    position={'absolute'} bottom={50} shadow={'6'} width={"300"} bgColor={'blue.400'}>
                    Get-Start
                </Button>
            </View>



        </NativeBaseProvider >
    )
}
export default Loading;