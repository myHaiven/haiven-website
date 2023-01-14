import React from "react";
import { Grid } from "@chakra-ui/react";

import { Focus, Home, Newsletter, Stats, Values, Vision } from "../sections";

export type Id = "home" | "vision" | "newsletter";

type Props = React.ComponentProps<typeof Grid>;

export default function MainPage(props: Props) {
  return (
    <Grid float="inline-end" gap={6} maxHeight="100%" p={10} {...props}>
      <Home id="home" />
      <Stats />
      <Vision id="vision" />
      <Focus />
      <Values />
      <Newsletter id="newsletter" />
    </Grid>
  );
}
