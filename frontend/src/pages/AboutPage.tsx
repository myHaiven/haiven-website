import { Container, Heading } from "@chakra-ui/layout";
import React from "react";

import MainPanel from "../components/MainPanel";
import { headingFontSizeBreakpoints } from "../styles/customTheme";

export default function AboutPage() {
  return (
    <Container maxW={"3xl"}>
      <MainPanel>
        <Heading fontSize={headingFontSizeBreakpoints} variant="primaryColor">
          About Us
        </Heading>
      </MainPanel>
    </Container>
  );
}
