import React from 'react';
import PortfolioContainer from "./components/PortfolioContainer";
import { VStack } from "@chakra-ui/layout";


function App() {
  return (
    <VStack>
      {/* <Flex w="100%"> */}
      <PortfolioContainer />
      {/* </Flex> */}
    </VStack>
  );
}

export default App;
