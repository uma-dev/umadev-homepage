import {
  Button,
  Container,
  Heading,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io5";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import Email from "../components/email";
import NextLink from "next/link";

const Contact = () => {
  return (
    <Layout title="Contact">
      <Container minHeight="45vh">
        <Section>
          <Heading as="h3" variant="section-title">
            Let's team up!
          </Heading>
          <Paragraph>
            If you're interested in discussing{" "}
            <NextLink href="/works">
              <Link>my projects </Link>
            </NextLink>
            or seeking further information, feel free to drop me a message.{" "}
          </Paragraph>
          <Email />
        </Section>

        <Section>
          <Heading as="h3" variant="section-title" mt={9}>
            On the web
          </Heading>
          <List>
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
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Contact;
