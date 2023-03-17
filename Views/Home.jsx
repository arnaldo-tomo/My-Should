import {
    NativeBaseProvider, Text, HStack, Heading, FlatList,
    VStack, Spacer, Box, Input, Badge, Fab, Icon, TextArea, Actionsheet, Center, useDisclose, Stack, Button
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { AntDesign, FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity, View, StyleSheet } from 'react-native';
import axios from "axios";
import { Formik } from 'formik';
import { App, input } from '../config/App';
const css = StyleSheet.create({ input: { with: 100, maxW: 350, mx: "auto", bgColor: "white" } })
const Home = ({ navigation }) => {
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();
    const [getAll, SetGetAll] = useState();

    const GetData = () => {
        axios.get(App.APIURL + "GetAllShould")

            .then((response) => {
                SetGetAll(response.data.should)

            })

    }

    useEffect(() => {
        GetData();

    }, [])



    return (
        <NativeBaseProvider>

            <Actionsheet isOpen={isOpen} onClose={onClose} disableOverlay>
                <Actionsheet.Content height={500} bgColor={'white'} bgcolor={'blue.200'} shadow={10} _dragIndicator={{
                    bg: 'red.500',

                }}>



                    <Formik initialValues={{ input }}
                        onSubmit={values => axios.post(App.APIURL + 'POSTShouls', values)
                            .then((response) => {
                                console.log(response.data.message)
                                navigation.push('Home');

                            })

                            .catch(() => {
                                console.log(response.data.message)
                                alert(response.data.message)
                            })
                        } >

                        {({ handleChange, handleBlur, handleSubmit, values }) => (

                            <VStack space={4} w="100%" >
                                <Input onChangeText={handleChange('inputShould')} onBlur={handleBlur('inputShould')} value={values.inputShould} bgColor={'white'} variant="outline" placeholder="Titulo da Nota" pb={4} />

                                <Input onChangeText={handleChange('lingauem')} onBlur={handleBlur('lingauem')} value={values.lingauem} bgColor={'white'} variant="outline" placeholder="Outline" pb={4} />

                                <TextArea h="50%" onChangeText={handleChange('descricao')} onBlur={handleBlur('descricao')} value={values.descricao} bgColor={'white'} placeholder="Text Area Placeholder" />

                                <Button onPress={handleSubmit} shadow={6} height={10} bgColor={'gray.900'}>Criar</Button>
                            </VStack>
                        )}
                    </Formik>

                    {/* <Actionsheet.Item onPress={onClose}>Cancel</Actionsheet.Item> */}
                </Actionsheet.Content>
            </Actionsheet>

            <HStack justifyContent="space-between" p={4} pt={16} bgColor={'white'} >
                <HStack>
                    <VStack>
                        <Heading fontWeight="bold" >
                            {App.nome}
                        </Heading>
                        <Text fontWeight={'medium'}>{new Date().toLocaleString()}</Text>
                    </VStack>

                </HStack>

                <HStack>
                    <Heading  >
                        <Ionicons name='calendar-outline' size={27} />
                    </Heading>
                </HStack>

            </HStack>

            <HStack p={2} bgColor={'white'}>
                <Input placeholder="Procurar projectos" placeholderTextColor={'white'} variant="filled" color={'white'} bgColor={'blue.500'} height="12" width="100%" borderRadius="6" py="1" px="2" InputLeftElement={<Icon ml="2" size="5" color="white" as={<Ionicons name="ios-search" />} />} />
            </HStack>

            <HStack p={2} justifyContent={'space-between'} bgColor={'white'}>
                <VStack>
                    <Badge // bg="red.400"
                        colorScheme="danger" rounded="full" mb={-4} mr={-3} zIndex={1} variant="solid" alignSelf="flex-end" _text={{
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
                        colorScheme="danger" rounded="full" mb={-4} mr={-3} zIndex={1} variant="solid" alignSelf="flex-end" _text={{
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
                <VStack >
                    <Badge // bg="red.400"
                        colorScheme="danger" rounded="full" mb={-4} mr={-1} zIndex={1} variant="solid" alignSelf="flex-end" _text={{
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



            <ScrollView>

                <View bgColor={'white'}>


                    <FlatList data={getAll} renderItem={({ item }) =>


                        <VStack p={2}  >

                            <TouchableOpacity onPress={() => navigation.navigate('Post', item)} >
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
                            </TouchableOpacity>
                            <Spacer />
                        </VStack>


                    } keyExtractor={item => item.id} />
                </View>
            </ScrollView>
            <Fab onPress={() => onOpen()} renderInPortal={false} bottom={5} bgColor={'white'}
                icon={<Icon color="black" as={AntDesign} name="plus" size="8" />} bgcolor="black" />

        </NativeBaseProvider >
    );
}



export default Home;