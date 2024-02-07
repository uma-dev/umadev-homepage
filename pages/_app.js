import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
