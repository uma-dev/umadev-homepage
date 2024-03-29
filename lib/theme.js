import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("@f0e7db", "@202023")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        fontSize: 22,
        marginTop: 3,
        marginBottom: 3,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode(colors.glassTelegramDay, colors.myPurlple)(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const colors = {
  glassTelegramNight: "#a2d4ec",
  glassTelegramDay: "#0088cc",
  myPurlple: "#ff63c3",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
});

export default theme;
