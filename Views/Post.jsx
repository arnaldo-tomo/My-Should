import { HStack, Switch, Text, Stack, VStack, Input, Heading, Radio, TextArea, Box, Button, View, FormControl, Select, Center, CheckIcon, WarningOutlineIcon, NativeBaseProvider } from "native-base";
import React from "react";
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
            <Stack flex={1} bgcolor={'white'} space={4} pb={4}  >
                <Heading pt={8} p={4} maxW="350px">
                    {id} :
                    {should}:
                    {lingauem}:
                    {descricao}:
                </Heading>

            </Stack>
        </NativeBaseProvider >
    )
}