import Image from "next/image";
import {
  Box,
  Button,
  Flex,
  Link,
  LinkBox,
  LinkOverlay,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { useRef } from "react";
import { IoLogoGithub } from "react-icons/io5";

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem = ({ children, title, href, thumbnail }) => {
  const initialFocusRef = useRef();
  return (
    <Box w="100%">
      <LinkBox as="a" href="#" scroll={false} cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay as="div">
          <Text mt={2} fontSize={20} align="center">
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14} align="left">
          {children}
        </Text>
      </LinkBox>

      <Accordion allowToggle>
        <AccordionItem border="none">
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="center"
                fontSize="sm"
                color="grey"
              >
                see more
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} p={1}>
            <Flex direction="column" gap={5}>
              <Text fontSize={14}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
              <Link href={href} target="_blank" alignSelf="flex-end">
                <Button
                  colorScheme="telegram"
                  leftIcon={<IoLogoGithub />}
                  size="sm"
                  ref={initialFocusRef}
                >
                  Code
                </Button>
              </Link>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
