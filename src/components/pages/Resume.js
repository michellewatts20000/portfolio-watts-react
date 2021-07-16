import React from 'react';
import {
  Stack,
  Heading,
  Text,
  Flex,
} from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

import { useMediaQuery } from '@chakra-ui/media-query';
import { Spacer } from '@chakra-ui/react';


export default function Resume() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Stack>
      <Flex direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
      >
        <Heading>Resume</Heading>
        <Spacer></Spacer>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
          velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
          ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
          non risus mi.
        </Text>
        <Button width="full" mt={4} type="submit">
          Download
        </Button>
      </Flex>
    </Stack>
  );
}
