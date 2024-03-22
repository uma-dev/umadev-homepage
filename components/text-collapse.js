import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

const TextCollapse = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Accordion allowToggle>
      <AccordionItem border="none">
        <h2>
          <AccordionButton
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Box as="span" flex="1" textAlign="center" textColor="gray.500">
              {isOpen ? "See less" : "Read more ..."}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={1}>{children}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default TextCollapse;
