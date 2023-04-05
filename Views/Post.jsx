import { HStack, Image, Text, Stack, VStack, Input, Heading, Radio, TextArea, Box, Button, View, Divider, Select, Center, CheckIcon, Actionsheet, NativeBaseProvider, useDisclose, } from "native-base";
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


    function Example() {
        const {
            isOpen,
            onOpen,
            onClose
        } = useDisclose();

        useEffect(() => {

        })
        return <>
            <Button onPress={onOpen}>Actionsheet</Button>

            <Actionsheet isOpen={isOpen} onClose={onClose} disableOverlay>
                <Actionsheet.Content>
                    <Actionsheet.Item>Option 1</Actionsheet.Item>
                    <Actionsheet.Item>Option 2</Actionsheet.Item>
                    <Actionsheet.Item>Option 3</Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
        </>;
    }

    return (
        <NativeBaseProvider>
            <VStack bgcolor={'white'}>
                <Box bgColor={'white'} height="full" top={'full'} borderRadius={12} width={'2xl'} >

                    <Heading style={{ textAlign: 'justify' }} padding={'2'}>{should}</Heading>

                </Box>

            </VStack>

            <Center flex={1} px="3">
                <Example />
            </Center>
        </NativeBaseProvider >
    )
}