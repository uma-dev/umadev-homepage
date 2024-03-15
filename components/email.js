import {
  Button,
  HStack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { IoCopy, IoCopyOutline, IoMail } from "react-icons/io5";
import { useClipboard } from "@chakra-ui/react";

const Email = () => {
  const { onCopy, hasCopied } = useClipboard("omar.roldan.50@gmail.com");

  return (
    <HStack justifyContent="center" mt={4}>
      <Tag size="lg" variant="subtle" colorScheme="gray">
        <TagLeftIcon boxSize="12px" color="" as={IoMail} />
        <TagLabel>omar.roldan.50@gmail.com</TagLabel>
      </Tag>

      <Tooltip
        hasArrow
        label={hasCopied ? "COPIED" : "COPY"}
        placement="top"
        closeDelay={1000}
        bg="gray.200"
        color="black"
      >
        <Button
          size="sm"
          colorScheme="telegram"
          onClick={() => {
            onCopy();
          }}
        >
          {hasCopied ? <IoCopy /> : <IoCopyOutline />}
        </Button>
      </Tooltip>
    </HStack>
  );
};

export default Email;
