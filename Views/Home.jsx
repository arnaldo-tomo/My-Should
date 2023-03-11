import {
    NativeBaseProvider, Text, HStack, Heading, FlatList,
    VStack, Spacer, Box, Input, FormControl, Fab, Icon, Switch, Actionsheet, Center, useDisclose, Path, Button
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { AntDesign, FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity, TextInput, View, StyleSheet } from 'react-native';
import axios from "axios";
import { Formik } from 'formik';
import { App, input } from '../config/App';
import { login } from '../services/funcoes';
const Home = () => {
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();
    const [getAll, SetGetAll] = useState();

    function GetData() {
        axios.get(App.APIURL + "GetAllShould")

            .then((response) => {
                console.log(response.data.message)
                SetGetAll(response.data.should)

            })
            .catch((response) => {
                console.log(response.data.message)
            })
    }

    useEffect(() => {
        GetData();
    }, [])

    const input = {
        inputShould: ' ',
    }


    return (
        <NativeBaseProvider>

            <Actionsheet isOpen={isOpen} onClose={onClose} disableOverlay>
                <Actionsheet.Content>

                    <Formik initialValues={{ input }}
                        onSubmit={values => axios.post(App.APIURL + "POSTShouls", values)
                            .then((response) => {
                                GetData()
                            })
                        } >

                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <Input />
                        )}
                    </Formik>

                    <Box w="100%" h={60} px={4} justifyContent="center">
                        <Text fontSize="16" color="gray.500" _dark={{
                            color: "gray.300"
                        }}>
                            Albums
                        </Text>
                    </Box>
                    <Actionsheet.Item>Delete</Actionsheet.Item>
                    <Actionsheet.Item>Share</Actionsheet.Item>
                    <Actionsheet.Item>Play</Actionsheet.Item>
                    <Actionsheet.Item>Favourite</Actionsheet.Item>
                    <Actionsheet.Item onPress={onClose}>Cancel</Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
            <Heading paddingLeft={2} paddingTop={8} >
                {App.nome}
            </Heading>



            <Fab renderInPortal={false} bottom={5} height={12} bgColor={'white'}
                icon={<Icon color="black" as={AntDesign} name="plus" size="4" />} />
            <ScrollView>
                <View>
                    <FlatList data={getAll} renderItem={({ item }) =>


                        <TouchableOpacity onPress={onOpen}>
                            <VStack p={2}  >

                                <Box borderRadius={6} shadow={6} bgColor={'white'} py="2" >
                                    <HStack p={2} fontWeight="400" alignItems="center" space={4}>

                                        <Text p={2} fontWeight="400"  >
                                            {item.should}
                                        </Text>
                                    </HStack>;
                                    <Text fontSize="xs" _dark={{
                                        color: "warmGray.50"
                                    }} color="coolGray.800" alignSelf="flex-start">
                                        <Switch size="sm" />
                                    </Text>
                                </Box>
                                <Spacer />
                            </VStack>
                        </TouchableOpacity>


                    } keyExtractor={item => item.id} />
                </View>
            </ScrollView>


        </NativeBaseProvider >
    );
}



export default Home;