import React from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Example from "./components/Example.tsx";

render(
  <ChakraProvider>
    <Example />
  </ChakraProvider>,
  document.getElementById("root")
);
