import React from 'react';
import {
  Stack,
  Heading,
  Text,
  Box,
  Flex
} from '@chakra-ui/layout';

import { Grid } from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/media-query';

export default function Portfolio() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (

    <Stack>
      <Flex direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start">
        <Grid templateColumns="repeat(4, 1fr)" gap={20}>
          <Box>
            <Heading>Project 1</Heading>
            <Text>
              Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
              Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu.
            </Text>
          </Box>
          <Box>
            <Heading>Project 2</Heading>
            <Text>
              Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
              Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu.
            </Text>
          </Box>
          <Box>
            <Heading>Project 3</Heading>
            <Text>
              Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
              Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu.
            </Text></Box >
          <Box>
            <Heading>Project 4</Heading>
            <Text>
              Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
              Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu.
            </Text>
          </Box >
          <Box>
            <Heading>Project 5</Heading>
            <Text>
              Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
              Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu.
            </Text>
          </Box >
          <Box>
            <Heading>Project 6</Heading>
            <Text>
              Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
              Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu.
            </Text>
          </Box >

        </Grid>
      </ Flex>
    </Stack >
  );
}
