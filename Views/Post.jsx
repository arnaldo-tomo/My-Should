import { HStack, Switch, Text, Stack, VStack, Input, Heading, Radio, TextArea, Box, Button, View, FormControl, Select, Center, CheckIcon, WarningOutlineIcon, NativeBaseProvider } from "native-base";
import React from "react";
import axios from "axios";
import { Formik } from 'formik';
import { GetData } from './Home';
import { App, input } from "../config/App";
import { StyleSheet } from 'react-native';

const css = StyleSheet.create({ input: { with: 100, maxW: 350, mx: "auto", bgColor: "white" } })
export default function Post({ navigation }) {
    return (
        <NativeBaseProvider>
            <Stack flex={1} bgcolor={'white'} space={4} pb={4}  >
                <Heading pt={8} p={4} maxW="350px">
                    Criar Notas
                </Heading>
                <Formik initialValues={{ input }}
                    onSubmit={values => axios.get(App.APIURL + "POSTShouls", values)
                        .then((response) => {
                            GetData();
                            navigation.push('Home');
                        })
                    } >

                    {({ handleChange, handleBlur, handleSubmit, values }) => (

                        <VStack space={4}>
                            <Input onChangeText={handleChange('inputShould')} onBlur={handleBlur('inputShould')} value={values.inputShould} bgColor={'white'} w="100%" maxW="350px" mx="auto" variant="outline" placeholder="Titulo da Nota" pb={4} />

                            <Input onChangeText={handleChange('lingauem')} onBlur={handleBlur('lingauem')} value={values.lingauem} bgColor={'white'} w="100%" maxW="350px" mx="auto" variant="outline" placeholder="Outline" pb={4} />

                            <TextArea onChangeText={handleChange('descricao')} onBlur={handleBlur('descricao')} value={values.descricao} bgColor={'white'} placeholder="Text Area Placeholder" h="50%" w="400%" maxW="350px" mx="auto" />

                            <Button onPress={handleSubmit} shadow={6} w="100%" maxW="350px" mx="auto" bgColor={'blue.500'}>Criar</Button>
                        </VStack>
                    )}
                </Formik>
            </Stack>
        </NativeBaseProvider >
    )
}