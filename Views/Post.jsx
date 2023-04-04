import { HStack, Image, Text, Stack, VStack, Input, Heading, Radio, TextArea, Box, Button, View, Divider, Select, Center, CheckIcon, Actionsheet, NativeBaseProvider } from "native-base";
import React from "react";
import Ionic from '@expo/vector-icons';
import axios from "axios";
import { Formik } from 'formik';
import { GetData } from './Home';
import { App, input } from "../config/App";
import { StyleSheet, AsyncStorage } from 'react-native';


const css = StyleSheet.create({ input: { with: 100, maxW: 350, mx: "auto", bgColor: "white" } })
export default function Post({ navigation, route }) {
    //getting route params
    const { id, should, lingauem, descricao } = route.params;

    return (
        <NativeBaseProvider>
            <VStack bgcolor={'white'}>
                <Box bgColor={'white'} height="full" >

                    <Heading padding={'2'}>{should}</Heading>

                </Box>

            </VStack>
        </NativeBaseProvider >
    )
}