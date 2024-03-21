import Image from "next/image";
import NextLink from "next/link";
import {
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  VStack,
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
import { useState } from "react";

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

export const WorkGridItem = ({
  children,
  title,
  href,
  thumbnail,
  website,
  features,
  stack,
}) => {
  const initialFocusRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
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
            <AccordionButton
              textColor="gray"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              _expanded={{ textColor: "gray.400" }}
            >
              <Box as="span" flex="1" textAlign="center" fontSize="sm">
                {isOpen ? "see less" : "see more"}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>

          <AccordionPanel pb={4} p={1}>
            <Flex direction="column" gap={3}>
              <VStack gap={2} fontSize="sm" align="start">
                <Text as="b">Features</Text>
                <Text>{features}</Text>
              </VStack>
              <HStack gap={2} fontSize="sm">
                <Badge fontSize="0.8em" size="sm">
                  Stack
                </Badge>
                <Text>{stack}</Text>
              </HStack>
              <HStack gap={2} fontSize="sm">
                <Badge fontSize="0.8em" size="sm">
                  Website
                </Badge>
                <NextLink href={website} target="_blank">
                  <Link>{title} page</Link>
                </NextLink>
              </HStack>

              <Link href={href} target="_blank" alignSelf="flex-end">
                <Button
                  colorScheme="telegram"
                  leftIcon={<IoLogoGithub />}
                  size="sm"
                  ref={initialFocusRef}
                >
                  Source
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
