import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import Navbar from "../components/Navbar";
import { customTheme } from "../styles/customTheme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
