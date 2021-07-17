import React from 'react';
import { Flex} from "@chakra-ui/layout";
import Navigation from './Navigation';

import '../styles/styles.css';

function Header() {
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
        <Navigation />
      </Flex>
   
  );
}

export default Header;
