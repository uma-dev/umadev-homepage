import {
  Box,
  Button,
  Container,
  Heading,
  List,
  ListItem,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import {
  IoCopy,
  IoCopyOutline,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoMail,
} from "react-icons/io5";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { useClipboard } from "@chakra-ui/react";

const Contact = () => {
  const { onCopy, hasCopied } = useClipboard("omar.roldan.50@gmail.com");

  return (
    <Layout title="Works">
      <Container minHeight="45vh">
        {/* <Heading as="h3" fontSize={22} mb={4} visibility={false}> */}
        {/*   Contact */}
        {/* </Heading> */}

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Contact
          </Heading>
          <Paragraph>
            If you're interested in discussing projects or seeking further
            information, feel free to drop me a message. Lets work together!
          </Paragraph>
          <Box align="center" mt={4}>
            <Button
              variant="ghost"
              colorScheme="telegram"
              leftIcon={<IoMail />}
              mr={1}
            >
              omar.roldan.50@gmail.com
            </Button>

            <Tooltip
              hasArrow
              label={hasCopied ? "COPIED" : "COPY"}
              placement="top"
              closeDelay={1000}
              bg="gray.300"
              color="black"
            >
              <Button
                colorScheme="telegram"
                size="sm"
                onClick={() => {
                  onCopy();
                }}
              >
                {hasCopied ? <IoCopyOutline /> : <IoCopy />}
              </Button>
            </Tooltip>
          </Box>
        </Section>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <Paragraph>You can also reach me at</Paragraph>
          <List>
            <ListItem>
              <Link href="https://github.com/uma-dev" target="_blank">
                <Button
                  variant="ghost"
                  pl={2}
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
                  pl={2}
                  colorScheme="telegram"
                  leftIcon={<IoLogoTwitter />}
                >
                  @uma_dev_
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/omar-roldan-g/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  pl={2}
                  colorScheme="telegram"
                  leftIcon={<IoLogoLinkedin />}
                >
                  in/omar-roldan-g/
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Contact;
