import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import { Focus, Home, Newsletter, Stats, Values, Vision } from "../sections";
import { customTheme } from "../styles/customTheme";

export default function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Navbar />
      <Home />
      <Stats />
      <Vision />
      <Focus />
      <Values />
      <Newsletter />
    </ChakraProvider>
  );
}
