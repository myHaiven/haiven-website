import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Home from "../sections/Home";
import { customTheme } from "../styles/customTheme";

export default function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Navbar />
      <Home />
    </ChakraProvider>
  );
}
