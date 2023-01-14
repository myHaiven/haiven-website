import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import Navbar from "../components/Navbar";
import HomePanel from "../sections/HomePanel";
import { customTheme } from "../styles/customTheme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Navbar />
    </ChakraProvider>
  );
}
