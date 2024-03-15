import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  VStack,
  HStack,
  Tag,
  TagLabel,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import Layout from "../components/layouts/article";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
        >
          Here me, I'm a developer based in Mexico!
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title" size="lg">
              Omar Roldán
            </Heading>
            <p>Software Developer | Telecom Engineer </p>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor={useColorModeValue(
                "blackAlpha.200",
                "whiteAlpha.800",
              )}
              borderWidth={4}
              borderStyle="solid"
              width="100px"
              height="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                // This path is located inside public/ folder
                src="/images/omar-profile.jpeg"
                alt="Profile Image"
                width="100"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title"></Heading>
          <Paragraph>
            <Flex justifyContent="left" gap="2" direction="column">
              <Text>
                <Text as="b">Responsible</Text> and always seeking to learn new
                things. As an engineer, I love applying my skills to make things
                simpler, solve issues, propose new solutions, and create a
                community with other developers while doing what I love.{" "}
              </Text>
              <Text as="i">"The path to clarity is through simplicity"</Text>
            </Flex>
          </Paragraph>
          <Box align="center" my={5}>
            <NextLink href="/works">
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="telegram"
                size="sm"
              >
                See portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Stack
          </Heading>
          <Box pl={2} pb={2}>
            <VStack align="start" spacing={4}>
              <Box>
                <Text fontWeight="bold">Frontend</Text>
                <HStack>
                  <Tag size="md" colorScheme="gray">
                    <TagLabel>React</TagLabel>
                  </Tag>
                  <Tag size="md" colorScheme="gray">
                    <TagLabel>Chakra UI</TagLabel>
                  </Tag>
                </HStack>
              </Box>
              <Box>
                <Text fontWeight="bold">Backend</Text>
                <HStack>
                  <Tag size="md" colorScheme="gray">
                    <TagLabel>Spring (Java)</TagLabel>
                  </Tag>
                  <Tag size="md" colorScheme="gray">
                    <TagLabel>Python </TagLabel>
                  </Tag>
                </HStack>
              </Box>
              <Box>
                <Text fontWeight="bold">Data</Text>
                <HStack>
                  <Tag size="md" colorScheme="gray">
                    <TagLabel>Postgre</TagLabel>
                  </Tag>
                  <Tag size="md" colorScheme="gray">
                    <TagLabel>MySQL</TagLabel>
                  </Tag>
                </HStack>
              </Box>
            </VStack>
          </Box>
          <Text p={4}>Among others ...</Text>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2020</BioYear>
            Engineering degree at UNAM.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            IINGEN UNAM: Scholarship holder
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            IFT: Data Analysis of fixed networks.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            IFT: Data Analysis of 5G and WiFi 6E.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Completed different tech{" "}
            <NextLink
              href="https://www.linkedin.com/in/omar-roldan-g/"
              target="_blank"
            >
              <Link>courses</Link>
            </NextLink>
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            3D printing, laser cutting, Muay Thai and BJJ to keep me active and
            fit.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};
export default Page;
