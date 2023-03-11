import {
    NativeBaseProvider, Text, HStack, Heading, FlatList,
    VStack, Spacer, Box, Input, Badge, Fab, Icon, Switch, Actionsheet, Center, useDisclose, Stack, Button
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { AntDesign, FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity, View, StyleSheet } from 'react-native';
import axios from "axios";
import { Formik } from 'formik';
import { App, input } from '../config/App';
import { login } from '../services/funcoes';
const Home = ({ navigation }) => {
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();
    const [getAll, SetGetAll] = useState();

    function GetData() {
        axios.get(App.APIURL + "GetAllShould")

            .then((response) => {
                SetGetAll(response.data.should)

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
                <Actionsheet.Content height={500} bgColor={'white'} _dragIndicator={{
                    bg: 'blue.500'
                }}>

                    <Formik initialValues={{ input }}
                        onSubmit={values => axios.post(App.APIURL + "POSTShouls", values)
                            .then((response) => {
                                GetData()
                            })
                        } >

                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <></>
                        )}
                    </Formik>

                    <Box w="100%" h={60} px={4} justifyContent="center">
                        <Text fontSize="16" color="gray.500" _dark={{
                            color: "gray.300"
                        }}>
                            Albums
                        </Text>
                    </Box>

                    <Actionsheet.Item onPress={onClose}>Cancel</Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
            <HStack justifyContent="space-between" p={4} pt={16} bgColor={'white'} >
                <HStack>
                    <VStack>
                        <Heading fontWeight={'extraBlack'} >
                            {App.nome}
                        </Heading>
                        <Text>{new Date().toLocaleString()}</Text>
                    </VStack>

                </HStack>

                <HStack>
                    <Heading  >
                        <Ionicons name='calendar-outline' size={27} />
                    </Heading>
                </HStack>

            </HStack>
            <HStack p={2} bgColor={'white'}>
                <Input placeholder="Procurar projectos" placeholderTextColor={'white'} variant="filled" shadow={6} color={'white'} bgColor={'blue.500'} width="100%" borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="white" as={<Ionicons name="ios-search" />} />} />
            </HStack>

            <HStack p={2} justifyContent={'space-between'} bgColor={'white'}>
                <VStack>
                    <Badge // bg="red.400"
                        colorScheme="danger" rounded="full" mb={-4} mr={-4} zIndex={1} variant="solid" alignSelf="flex-end" _text={{
                            fontSize: 12
                        }}>
                        5
                    </Badge>
                    <Button borderRadius="14" mx={{
                        base: "auto",
                        md: 0
                    }} p="2" bg="blue.300" _text={{
                        fontSize: 14,
                        fontWeight: "bold"
                    }}>
                        Completos
                    </Button>
                </VStack>
                <VStack>
                    <Badge // bg="red.400"
                        colorScheme="danger" rounded="full" mb={-4} mr={-4} zIndex={1} variant="solid" alignSelf="flex-end" _text={{
                            fontSize: 12
                        }}>
                        2
                    </Badge>
                    <Button borderRadius="14" mx={{
                        base: "auto",
                        md: 0
                    }} p="2" bg="cyan.500" _text={{
                        fontSize: 14,
                        fontWeight: "bold"
                    }}>
                        Pendentes
                    </Button>
                </VStack>
                <VStack pr={2}>
                    <Badge // bg="red.400"
                        colorScheme="danger" rounded="full" mb={-4} mr={-4} zIndex={1} variant="solid" alignSelf="flex-end" _text={{
                            fontSize: 12
                        }}>
                        2
                    </Badge>
                    <Button borderRadius="14" mx={{
                        base: "auto",
                        md: 0
                    }} p="2" bg="cyan.500" _text={{
                        fontSize: 14,
                        fontWeight: "bold"
                    }}>
                        Em curso
                    </Button>
                </VStack>
            </HStack>


            <Fab onPress={() => navigation.push('Post')} renderInPortal={false} bottom={5} bgColor={'white'}
                icon={<Icon color="black" as={AntDesign} name="plus" size="8" />} bgcolor="black" />
            <ScrollView>

                <View bgColor={'white'}>


                    <FlatList data={getAll} renderItem={({ item }) =>


                        <TouchableOpacity onPress={onOpen}>
                            <VStack p={2}  >

                                <Box borderRadius={6} shadow={6} bgColor={'white'} py="2" >

                                    <HStack p={1} fontWeight="400" alignItems="center" space={4}>
                                        <Stack flex="1" p="2" justifyContent="space-around">
                                            <Stack space="2">
                                                <Heading size="md" ml="-1">
                                                    {item.should}
                                                </Heading>
                                            </Stack>
                                        </Stack>
                                    </HStack>

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