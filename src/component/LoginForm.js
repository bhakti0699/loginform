import React from 'react';
import {Flex,Box,Heading,FormControl,FormLabel,Input,Button} from '@chakra-ui/react';
export default function LoginForm()
{
    return(
        <Flex width="full" align="center" justifyContent="center">
            <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
                <Box textAlign="center">
                    <Heading>Login</Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder="Enter Your Email:"></Input>
                        </FormControl>
                        <FormControl mt={6} isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input type="password"></Input>
                        </FormControl>
                        <Button colorScheme="teal" variant="outline" mt={4} width="full" type="submit">Sign In</Button>
                    </form>
                </Box>
            </Box>
        </Flex>
    )
}