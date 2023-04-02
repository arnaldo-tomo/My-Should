import { NativeBaseProvider, Text, VStack, HStack, Heading, Box, Center, Button, Image, View } from 'native-base';
import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';

const loading = ({ navigation }) => {
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
                <Button style={{ alignSelf: 'center' }} onPress={() => { navigation.navigate('Home') }}
                    position={'absolute'} bottom={50} shadow={'6'} width={"300"} bgColor={'blue.400'}>
                    Get-Start
                </Button>
            </View>



        </NativeBaseProvider >
    )
}
export default loading;