import Logo from "./logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";
import GitHubButton from "./github-button";

const LinkItem = ({ href, path, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("blackAlpha.700", "whiteAlpha.800");
  const activeColor = useColorModeValue("blackAlpha.900", "white");
  return (
    <NextLink href={href}>
      <Link
        p={2}
        fontSize="sm"
        color={active ? activeColor : inactiveColor}
        {...props}
      >
        {children}
      </Link>
      <Box
        bg={
          active
            ? useColorModeValue("glassTelegramDay", "glassTelegramNight")
            : undefined
        }
        height={0.5}
        position="relative"
        top="-3px"
      ></Box>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center">
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          justifyContent="right"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/" path={path}>
            About me
          </LinkItem>
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            Contact
          </LinkItem>
        </Stack>

        {/* Make flex in this box to adjust to navbar resize */}
        <Box flex={{ base: 1, md: 0.4 }} align="right">
          <ThemeToggleButton />
          <Box flex={1} display={{ base: "none", md: "inline-block" }}>
            <GitHubButton />
          </Box>

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                arial-label="Options"
              />
              {/* render until open */}
              <MenuList isLazy>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About me</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/contact" passHref>
                  <MenuItem as={Link}>Contact</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
