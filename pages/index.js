import { Container, Box, Heading } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hi there, here me, I'am a developer based on Mexico!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Omar Roldan
          </Heading>
          <p>Developer / Telecomm Engineer / Tech lover</p>
        </Box>
      </Box>
    </Container>
  );
};
export default Page;
