import React from "react";
import { HStack, Image, Text, Stack, VStack, Input, Heading, Radio, TextArea, Box, Button, View, Divider, Select, Center, CheckIcon, Actionsheet, NativeBaseProvider, useDisclose, Fab, Left } from "native-base";
import axios from "axios";
import { Formik } from 'formik';
import { GetData } from './Home';
import { App, input } from "../config/App";
import { StyleSheet, AsyncStorage } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Header } from "react-native/Libraries/NewAppScreen";


const css = StyleSheet.create({ input: { with: 100, maxW: 350, mx: "auto", bgColor: "white" } })
export default function Post({ navigation, route }) {
    //getting route params
    const { id, should, lingauem, descricao } = route.params;

    const [isOpen, setIsOpen] = useState(false);

    function onOpen() { setIsOpen(true); }

    function Example() {

        const { isOpen, onOpen, onClose } = useDisclose();

        useEffect(() => { onOpen(); }, []);

        return <>
            <Actionsheet isOpen={isOpen} onClose={onClose} disableOverlay>
                <Actionsheet.Content>
                    <Actionsheet.Item>{should}</Actionsheet.Item>
                    <Actionsheet.Item>Option 2</Actionsheet.Item>
                    <Actionsheet.Item></Actionsheet.Item>
                    <Actionsheet.Item></Actionsheet.Item>
                    <Actionsheet.Item></Actionsheet.Item>
                    <Actionsheet.Item></Actionsheet.Item>
                    <Actionsheet.Item></Actionsheet.Item>
                    <Actionsheet.Item></Actionsheet.Item>
                    <Actionsheet.Item></Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
        </>
    }

    return (
        <NativeBaseProvider>


            <Center flex={1} bgColor={'blue.100'}>
                <Fab alignContent={'center'} position={'absolute'} top={'50'} />
                <Box w={200} shadow="10" position={'absolute'} bgColor={'white'} px="2" borderRadius={6}>
                    <Text textAlign={'justify'} >
                        {should}
                    </Text>
                </Box>
            </Center>
            <Center flex={1} px="2" bgColor={'blue.100'} >
                <Example />
            </Center>
        </NativeBaseProvider >
    )
}