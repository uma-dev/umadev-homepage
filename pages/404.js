import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">404</Heading>
      <Text> Ups... the page your are looking for was not found!</Text>
      <Divider my={6} />

      <Box mt={8} minHeight="20vh" align="center">
        <NextLink href="/">
          <Button
            colorScheme="telegram"
            size="sm"
            leftIcon={<ChevronLeftIcon />}
          >
            Homepage
          </Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
