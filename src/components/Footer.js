import React from 'react';
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from '@chakra-ui/color-mode'
import { VStack, Flex, Heading, Spacer } from '@chakra-ui/layout';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
  const { toggleColorMode } = useColorMode();
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading
          ml="8" size="md" fontWeight='semibold' color="cyan.400">Michelle Watts Portfolio</Heading>
        <Spacer></Spacer>
        <IconButton icon={<FaLinkedin />} isRound='true' onClick={toggleColorMode}></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={toggleColorMode}></IconButton>

      </Flex>
    </VStack>
  );
}

export default Footer;
