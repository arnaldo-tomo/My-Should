import {
    NativeBaseProvider, Text, HStack, Heading, FlatList,
    VStack, Spacer, Box, Input, Badge, Fab, Icon, useDisclose, Actionsheet, Center, Skeleton, Stack, Button, Pressable
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { AntDesign, FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity, View, StyleSheet } from 'react-native';
import axios from "axios";
import { Formik } from 'formik';
import { App, input } from '../config/App';

const Home = ({ navigation }) => {

    const [getAll, SetGetAll] = useState(true);

    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    useEffect(() => {

        const GetData = () => {
            axios.get(App.APIURL + "GetAllShould")
                .then((response) => {
                    SetGetAll(response.data.should)
                })
        }

        GetData();
        SetGetAll(false);


    }, [])



    return (
        <NativeBaseProvider>

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
                    <Badge  // bg="red.400"
                        colorScheme="danger" rounded="full" mb={-4} mr={-3} zIndex={1} variant="solid" alignSelf="flex-end" _text={{
                            fontSize: 12
                        }}>
                        5
                    </Badge>
                    <Button onPress={onOpen} borderRadius="14" mx={{
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


            <FlatList data={getAll} renderItem={({ item }) =>
                <View bgColor={'white'}>

                    <VStack p={2}  >
                        <Box borderRadius={6} shadow={4} bgColor={'white'} py="2" borderRightColor={'black'} borderLeftWidth={4} >
                            <TouchableOpacity onPress={() => navigation.navigate('Post', item)}>
                                <HStack p={1} fontWeight="400" alignItems="center" space={4} justify={'center'}>
                                    <Stack flex="1" p="2" justifyContent="space-around">
                                        <Stack space="2">
                                            <Heading size="sm" ml="-1">
                                                {item.should}
                                            </Heading>
                                            <Text fontWeight={'normal'}>{item.created_at}</Text>

                                        </Stack>
                                    </Stack>
                                </HStack>
                            </TouchableOpacity>

                        </Box>
                        <Spacer />
                    </VStack>
                </View>
            } keyExtractor={item => item.id} />

            < Fab shadow={'9'} renderInPortal={false} bottom={5} bgColor={'blue.400'}
                icon={<Icon color="white" as={AntDesign} name="plus" size="8" />} />

            <Actionsheet isOpen={isOpen} onClose={onClose} disableOverlay>
                <Actionsheet.Content>
                    <Actionsheet.Item>Option 1</Actionsheet.Item>
                    <Actionsheet.Item>Option 2</Actionsheet.Item>
                    <Actionsheet.Item></Actionsheet.Item>
                    <Actionsheet.Item></Actionsheet.Item>
                    <Actionsheet.Item></Actionsheet.Item>
                    <Actionsheet.Item></Actionsheet.Item>
                    <Actionsheet.Item></Actionsheet.Item>
                    <Actionsheet.Item></Actionsheet.Item>
                    <Actionsheet.Item></Actionsheet.Item>
                    <Actionsheet.Item></Actionsheet.Item>
                    <Actionsheet.Item></Actionsheet.Item>
                    <Actionsheet.Item></Actionsheet.Item>
                    <Actionsheet.Item></Actionsheet.Item>
                    <Actionsheet.Item></Actionsheet.Item>
                    <Actionsheet.Item></Actionsheet.Item>
                    <Actionsheet.Item></Actionsheet.Item>
                    <Actionsheet.Item></Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
        </NativeBaseProvider >
    );
}

export default Home;