import React from 'react';
import {  Box, IconButton, useColorMode } from '@chakra-ui/react';
import {FaSun,FaMoon} from 'react-icons/fa';
export default function ThemeToggler() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Box textAlign="right" py={4} mr={12}>
        <IconButton 
        icon={colorMode === 'light' ? <FaSun/> : <FaMoon/>} 
        isRound={true}
        onClick={toggleColorMode }>
      </IconButton>
      </Box>
    );
  }