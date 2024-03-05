import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={useColorModeValue("light", "dark")}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.12 }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorScheme={useColorModeValue("white", "black")}
          _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
          icon={useColorModeValue(
            <MoonIcon color="purple.400" boxSize={5} />,
            <SunIcon color="orange.200" boxSize={5} />,
          )}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
