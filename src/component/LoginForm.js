import React,{useState} from 'react';
import {Flex,Box,Heading,FormControl,FormLabel,Input,Button,CircularProgress,Icon,InputGroup,InputRightElement} from '@chakra-ui/react';
import { userLogin } from '../utils/mockApi';

export default function LoginForm()
{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const [isLoading,setIsLoading]= useState(false);
    const [isLoggedIn,setIsLoggedIn]= useState(false);
    const [showPassword,setShowPassword]= useState(false);

    const handleSubmit = event => 
    {
        event.preventDefault();
        setIsLoading(true);

        try{
            await userLogin({ email, password });
            setIsLoggedIn(true);
            setIsLoading(true);
            setShowPassword(true);
        }
        catch(error)
        {
            setError('Invalid Username or Password');
            setIsLoading(false);
            setEmail('');
            setPassword('');
            setShowPassword(false);
        }
    };

    const handlePasswordVisibility = () => setShowPassword(!showPassword);

    return(
        <Flex width="full" align="center" justifyContent="center">
            <Box 
                p={8} 
                maxWidth="500px" 
                borderWidth={1} 
                borderRadius={8} 
                boxShadow="lg">
                    {isLoggedIn ? (
                        <Box textAlign="center">
                            <Text>{email}Logged in</Text>
                            <Button
                                colorScheme="orange"
                                variant="outline"
                                width="full"
                                mt={4}
                                onClick={()=>setIsLoggedIn(false)}>
                                    Sign Out
                            </Button>
                        </Box>
                    )
                    :
                    (
                        <>
                        <Box textAlign="center">
                    <Heading>Login</Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form onSubmit={handleSubmit}>
                        <FormControl isRequired>

                            <FormLabel>Email</FormLabel>
                            <Input 
                                type="email" 
                                placeholder="Enter Your Email:"
                                size="lg"
                                onChange={event=>setEmail(event.currentTarget.value)}/>
                        </FormControl>
                        <FormControl mt={6} isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                            <Input 
                                type={showPassword ? 'text' :  'password'}
                                size="lg"
                                onChange={event=>setPassword(event.currentTarget.value)}/>
                                <InputRightElement>
                                    <Button
                                    h="1.5rem"
                                    size="sm"
                                    onClick={handlePasswordVisibility}>
                                        {showPassword ? (
                                            <Icon name="view-off"/>
                                        )
                                        :
                                        (
                                            <Icon name="view"/>
                                        )
                                    }
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Button 
                            colorScheme="teal" 
                            variant="outline" 
                            mt={4} 
                            width="full" 
                            type="submit">
                                {
                                    isLoading ? (
                                        <CircularProgress
                                            isIndeterminate
                                            size="24px"
                                            color="teal">
                                        </CircularProgress>
                                    )
                                    :
                                    (
                                        'Sign In'
                                    )
                                }
                                </Button>
                    </form>
                </Box>
                </>
                    )}
            </Box>
        </Flex>
    )
}