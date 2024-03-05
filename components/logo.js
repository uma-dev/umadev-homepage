import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";
import HomeIcon from "./icons/home";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  height: 10px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(-30deg);
  }
`;

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <HomeIcon />
        <Text
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          fontFamily="M PLUS Rounded 1c, sans-serif"
          fontWeight="bold"
          ml={1}
        >
          Omar Roldán
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
