import React from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";

import "../styles/global.css";
import Navbar from "../components/Navbar";
import { customTheme } from "../styles/customTheme";
import MainPage from "./MainPage";

export default function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Flex direction="column" maxHeight="100%">
        <Navbar />
        {/* The scroll here let's the navbar stay at the top without content scrolling underneath, it is also responsive to navbar width changes */}
        <MainPage overflowY="scroll" />
      </Flex>
    </ChakraProvider>
  );
}
