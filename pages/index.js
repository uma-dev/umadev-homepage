import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
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
import { IoEye } from "react-icons/io5";
import TextCollapse from "../components/text-collapse";

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
          <Text fontSize="sm" p={3}>
            Among others ...
          </Text>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            CV
          </Heading>
          <Paragraph>See the pdf</Paragraph>
          <Box align="center" my={5}>
            <NextLink
              href="https://drive.google.com/file/d/1-cZMMcWWWyR3-ejDn7W-ViKOLXqjKr3I/view?usp=sharing"
              target="_blank"
            >
              <Button rightIcon={<IoEye />} colorScheme="telegram" size="sm">
                CV
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section>
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

        <TextCollapse>
          <Section>
            <Heading as="h3" variant="section-title">
              I ♡
            </Heading>
            <Paragraph>
              I'm into hitting the mountains, tinkering with 3D printing / laser
              cutting and practicing Muay Thai and BJJ to keep me fit.
            </Paragraph>
          </Section>

          <Section>
            <Heading as="h3" variant="section-title">
              ♪
            </Heading>
            <Paragraph>Need a music for working? </Paragraph>
            <HStack justifyContent="center" gap={{ base: 3, md: 6 }} mt={4}>
              <LinkBox
                as="a"
                target="_blank"
                href="https://open.spotify.com/playlist/37i9dQZF1DX7K31D69s4M1?si=801bed66f3f64bf9"
                scroll={false}
                cursor="pointer"
              >
                <Image
                  src="data:image/jpeg;base64,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"
                  alt="Piano in the background"
                  placeholder="blur"
                  boxSize="80px"
                  objectFit="cover"
                  borderRadius={10}
                />
                <LinkOverlay as="div">
                  <Text mt={1} fontSize={14} align="center">
                    Calm piano
                  </Text>
                </LinkOverlay>
              </LinkBox>
              <LinkBox
                as="a"
                target="_blank"
                href="https://open.spotify.com/playlist/75RtjKDdMHT02ww4lHXEBg?si=3b3f4a7de84245ad"
                scroll={false}
                cursor="pointer"
              >
                <Image
                  src="data:image/jpeg;base64,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"
                  alt="Piano in the background"
                  placeholder="blur"
                  boxSize="80px"
                  objectFit="cover"
                  borderRadius={10}
                />
                <LinkOverlay as="div">
                  <Text mt={1} fontSize={14} align="center">
                    Energy
                  </Text>
                </LinkOverlay>
              </LinkBox>
              <LinkBox
                as="a"
                target="_blank"
                href="https://open.spotify.com/playlist/4ETfiRPHVmUFLF6q0g8Fux?si=e972b262e39e4923"
                scroll={false}
                cursor="pointer"
              >
                <Image
                  src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c61df3df6bb766dbf3f89d15"
                  alt="Piano in the background"
                  placeholder="blur"
                  boxSize="80px"
                  objectFit="cover"
                  borderRadius={10}
                />
                <LinkOverlay as="div">
                  <Text mt={1} fontSize={14} align="center">
                    Focused
                  </Text>
                </LinkOverlay>
              </LinkBox>
            </HStack>
          </Section>
        </TextCollapse>
      </Container>
    </Layout>
  );
};
export default Page;
