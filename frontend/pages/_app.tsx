import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import { customTheme } from "../styles/customTheme";
import { MainPage } from "./MainPage";

export default function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Navbar />
      <MainPage />
    </ChakraProvider>
  );
}
