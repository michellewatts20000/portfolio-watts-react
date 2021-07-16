import React from 'react';
import {
  Stack,
  Heading,
  Text,
  Box
} from '@chakra-ui/layout';

import { Grid } from "@chakra-ui/react"


export default function Portfolio() {
  return (
    <Stack>
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
    </Stack >
  );
}
