import { IconButton, useColorModeValue } from "@chakra-ui/react";
import { IoLogoGithub } from "react-icons/io5";
import NextLink from "next/link";

const GitHubButton = () => {
  return (
    <NextLink href="https://github.com/uma-dev">
      <IconButton
        aria-label="Github button"
        colorScheme={useColorModeValue("white", "black")}
        _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
        icon={
          <IoLogoGithub color={useColorModeValue("gray", "white")} size={22} />
        }
      ></IconButton>
    </NextLink>
  );
};

export default GitHubButton;
