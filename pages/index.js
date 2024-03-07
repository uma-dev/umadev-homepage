import NextLink from "next/link";
import {
  Link,
  Container,
  Box,
  Button,
  Heading,
  Image,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import Layout from "../components/layouts/article";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
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
          Here me, I'am a developer based in Mexico!
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Omar Roldán
            </Heading>
            <p>Developer / Telecomm Engineer / Tech lover</p>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
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
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Accountable developer with knowledge in Spring Boot, Spring REST,
            Spring Security, GCP, SQL, HTML/CSS and data analytics. I'm seeking
            about collaborating on intricate software challenges to create
            enterprise-level applications, acquire new skills and thrive through
            collaboration with other developers. Reach me at{" "}
            <NextLink href="https://www.linkedin.com/in/omar-roldan-guerra/">
              <Link>LinkedIn</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="telegram">
                My portafolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1997</BioYear>
            Born in Mexico.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed the Telecommunications Program in the School of
            Engineering at UNAM (CU).
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Worked at IINGEN UNAM (Scholarship holder)
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Worked at IFT (techical and fixed networks).
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Worked at IFT (mobile networks such as 5G, selfdriven cars, etc. ).
          </BioSection>

          <BioSection>
            <BioYear>2023 - present</BioYear>
            Completed different courses related to Java, Spring, Micro services,
            RDB, Frontend, DT, etc.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/uma-dev" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="telegram"
                  leftIcon={<IoLogoGithub />}
                >
                  @uma-dev
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/uma_dev_" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="telegram"
                  leftIcon={<IoLogoTwitter />}
                >
                  @uma_dev_
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/omar-roldan-guerra/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="telegram"
                  leftIcon={<IoLogoLinkedin />}
                >
                  /omar-roldan-guerra
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};
export default Page;
