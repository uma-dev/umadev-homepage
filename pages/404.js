import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text> The page was not found!</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="telegram">Return to Home</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
