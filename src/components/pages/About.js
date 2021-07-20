import React from 'react';
import { Image } from '@chakra-ui/image';
import { useColorMode } from '@chakra-ui/color-mode'
import { Stack, Text, Flex, Box } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Button } from '@chakra-ui/button';
export default function About() {

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Stack>
      <Flex direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start">
        <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
          <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
          <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.800, blue.200, purple.700)" bgClip='text'>Michelle Watts</Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
            Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
            mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
            lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
            imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
            in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.</Text>
          <Button mt={8} colorScheme="blue" onClick={() =>
            window.open("https://github.com/michellewatts20000/portfolio-watts-react")
          }>Contact</Button>

        </Box>
        <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
          backgroundColor="transparent" boxShadow="lg"
          boxSize="300px" src='/img/my-face.jpeg' />
      </Flex>
    </Stack>
  );
}
