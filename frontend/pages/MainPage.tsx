import React from "react";
import { Box } from "@chakra-ui/react";

import { Focus, Home, Newsletter, Stats, Values, Vision } from "../sections";

export type Id = "home" | "vision" | "newsletter";

type Props = React.ComponentProps<typeof Box>;

export function MainPage(props: Props) {
  return (
    <Box float="inline-end" maxHeight="100%" {...props}>
      <Home id="home" />
      <Stats />
      <Vision id="vision" />
      <Focus />
      <Values />
      <Newsletter id="newsletter" />
    </Box>
  );
}
