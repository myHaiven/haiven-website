import React from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Example from "./components/Example.tsx";
import Navbar from "./components/Navbar.tsx";

render(
  <ChakraProvider>
    <Navbar />
  </ChakraProvider>,
  document.getElementById("root")
);
