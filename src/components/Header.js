import React from 'react';
import { Flex, VStack } from "@chakra-ui/layout";
import Navigation from './Navigation';

import '../styles/styles.css';

function Header() {
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Navigation />
      </Flex>
    </VStack>
  );
}

export default Header;
