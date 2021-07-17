import React from 'react';
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from '@chakra-ui/color-mode'
import { Flex, Heading, Spacer } from '@chakra-ui/layout';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
  const { toggleColorMode } = useColorMode();
  return (
 
         <Flex
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            p={8}
            bg={["primary.500", "primary.500", "transparent", "transparent"]}
            color={["white", "white", "primary.700", "primary.700"]}
        >
        <Heading
          ml="8" size="md" fontWeight='semibold'>Michelle Watts Portfolio</Heading>
        <Spacer></Spacer>
        <IconButton icon={<FaLinkedin />} isRound='true' onClick={toggleColorMode}></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={toggleColorMode}></IconButton>

      </Flex>
 
  );
}

export default Footer;
