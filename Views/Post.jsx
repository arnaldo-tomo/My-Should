import { HStack, Switch, Text, Stack, VStack, Input, Heading, Radio, TextArea, Box, Button, View, FormControl, Select, Center, CheckIcon, WarningOutlineIcon, NativeBaseProvider } from "native-base";
import React from "react";
export default function Post() {
    const [service, setService] = React.useState("");
    return (
        <NativeBaseProvider>
            <Stack flex={1} bgcolor={'white'} space={4} pb={4}  >
                <Heading pt={8} p={4} maxW="350px">
                    Criar Notas
                </Heading>
                <VStack space={4}>
                    <Input bgColor={'white'} w="100%" maxW="350px" mx="auto" variant="outline" placeholder="Titulo da Nota" pb={4} />
                    <Input bgColor={'white'} w="100%" maxW="350px" mx="auto" variant="outline" placeholder="Outline" pb={4} />
                    <TextArea bgColor={'white'} placeholder="Text Area Placeholder" w="400%" maxW="350px" mx="auto" />
                </VStack>
                <VStack>
                    <Button shadow={6} w="100%" maxW="350px" mx="auto" bgColor={'blue.500'}>Criar</Button>
                </VStack>

            </Stack>

        </NativeBaseProvider >
    )
}