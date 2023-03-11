import { Center, NativeBaseProvider, View, Stack, VStack, Input, Heading, CheckIcon, TextArea, Box, Button, Select } from "native-base";
export default function Post() {
    return (
        <NativeBaseProvider>
            <Stack flex={1} bgcolor={'white'} space={4} pb={4} >
                <Heading pt={8} p={4}>
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

        </NativeBaseProvider>
    )
}