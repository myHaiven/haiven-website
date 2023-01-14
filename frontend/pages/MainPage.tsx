import React from "react";
import { Box } from "@chakra-ui/react";

import { Focus, Home, Newsletter, Stats, Values, Vision } from "../sections";

export type Id = "home" | "vision" | "newsletter";

export function MainPage() {
  return (
    <Box>
      <Home id="home" />
      <Stats />
      <Vision id="vision" />
      <Focus />
      <Values />
      <Newsletter id="newsletter" />
    </Box>
  );
}
