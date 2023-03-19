import { HStack, Image, Text, Stack, VStack, Input, Heading, Radio, TextArea, Box, Button, View, FormControl, Select, Center, CheckIcon, WarningOutlineIcon, NativeBaseProvider } from "native-base";
import React from "react";
import Ionic from '@expo/vector-icons';
import axios from "axios";
import { Formik } from 'formik';
import { GetData } from './Home';
import { App, input } from "../config/App";
import { StyleSheet } from 'react-native';

const css = StyleSheet.create({ input: { with: 100, maxW: 350, mx: "auto", bgColor: "white" } })
export default function Post({ navigation, route }) {
    //getting route params
    const { id, should, lingauem, descricao } = route.params;
    return (
        <NativeBaseProvider>
            <Stack flex={1}>
                <Image flex={1} h="sm" w={'sm'} source={require('./b.jpg')} alt="logo" />

            </Stack>
            <VStack bgcolor={'white'}>
                <Box height={'50'} bgColor={'white'} borderTopRadius={"sm"} >

                    <Heading padding={'2'}>{should}</Heading>

                </Box>

            </VStack>
        </NativeBaseProvider >
    )
}