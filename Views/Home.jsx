import { NativeBaseProvider, Text, HStack, Heading, FlatList, VStack, Spacer, Box, Input, FormControl, Fab, Icon } from 'native-base';
import React, { useEffect, useState } from 'react';
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity, Button, TextInput, View, StyleSheet } from 'react-native';
import axios from "axios";
import { Formik } from 'formik';
import { App, input } from '../config/App';
import { login } from '../services/funcoes';
const Home = () => {
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
        login();
    }, [])

    const input = {
        inputShould: ' ',
    }

    function clear() {
        const input = {
            inputShould: ' ',
        }
    }

    return (
        <NativeBaseProvider>

            <Heading fontSize="xl" p="4" pb="3" >
                {App.nome}
            </Heading>
            <ScrollView>
                <FlatList data={getAll} renderItem={({ item }) =>
                    <VStack p={2}  >
                        <Box borderRadius={6} shadow={6} bgColor={'white'} py="2" onPress={login()}>
                            <Text p={2} fontWeight="400"  >
                                {item.should}
                            </Text>
                        </Box>
                        <Spacer />
                    </VStack>
                } keyExtractor={item => item.id} />
            </ScrollView>

            <Formik initialValues={{ input }}
                onSubmit={values => axios.post(App.APIURL + "POSTShouls", values)
                    .then((response) => {
                        clear()
                        console.log(response.data.message)
                        GetData()
                    })
                    .catch(() => { console.log(response.data.message) })
                } >

                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <FormControl>
                            <Input position={'absolute'} bottom={0} focusOutlineColor={'gray'} bgColor={'white'} bottom="5" borderRadius={20} height={12} shadow={2} left={4} width={270} placeholder="Writes Your's Ideia" onChangeText={handleChange('inputShould')}
                                onBlur={handleBlur('inputShould')}
                                value={values.inputShould} isRequired={true} />
                        </FormControl>

                        <Fab onPress={handleSubmit} renderInPortal={false} bottom={5} height={12} bgColor={'white'}
                            icon={<Icon color="black" as={AntDesign} name="plus" size="4" />} />
                    </View>
                )}
            </Formik>

        </NativeBaseProvider >
    );
}



export default Home;