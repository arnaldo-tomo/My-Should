import { NativeBaseProvider, Text, HStack, Heading, FlatList, VStack, Spacer, Box, Input, FormControl, Fab, Icon } from 'native-base';
import React from 'react';
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity, Button, TextInput, View } from 'react-native';
import axios from "axios";
import { Formik } from 'formik';
import { App, input } from '../config/App';
const Home = () => {


    const data = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        }
        , {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        }
        , {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        }
        , {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        }
        , {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        }
        , {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        }
        , {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        }
        , {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        }
        , {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        }
        , {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        }
        , {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        }
        , {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        }
        , {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        }
        , {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        }
        , {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        }
        , {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        }
        , {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        }
        , {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        }
        , {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        }
    ]

    return (
        <NativeBaseProvider>

            <Heading fontSize="xl" p="4" pb="3">
                {App.nome}
            </Heading>
            <ScrollView>
                <FlatList data={data} renderItem={({ item }) =>
                    <VStack p={2}  >
                        <Box borderRadius={6} shadow={6} bgColor={'white'} py="2">
                            <Text p={2} fontWeight="400" >
                                Bengaluru (also called Bangalore) is the center of India's high-tech
                                industry. The city is also known for its parks and nightlife.
                            </Text>
                        </Box>
                        <Spacer />
                    </VStack>
                } keyExtractor={item => item.id} />
            </ScrollView>

            <Formik
                initialValues={{ input }}

                onSubmit={values => console.log(values)}
            >
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

        </NativeBaseProvider>
    )
}

export default Home;