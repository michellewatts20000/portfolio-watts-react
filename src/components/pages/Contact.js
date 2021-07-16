import React from 'react';
import {
  Stack,
  Heading,
  Flex
} from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { FormControl } from '@chakra-ui/form-control';
import { FormLabel, Input } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/media-query';

export default function Contact() {

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Stack>
      <Flex direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start">
        <form>
          <Heading>Contact Me</Heading>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="Your name" />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="your@email.com" />
          </FormControl>
          <FormControl mt={6}>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Write your message here" />
          </FormControl>
          <Button width="full" mt={4} type="submit">
            Message me
          </Button>
        </form>
      </Flex>
    </Stack>

  );
}
