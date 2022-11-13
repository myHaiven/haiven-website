import { Heading, Text } from "@chakra-ui/layout";
import React from "react";

import MainPanel from "../components/MainPanel";
import { headingFontSizeBreakpoints } from "../styles/customTheme";

export default function Team() {
  return (
    <MainPanel>
      <Heading fontSize={headingFontSizeBreakpoints} variant="primaryColor">
        Team
      </Heading>
      <Text variant="grey">Team description here.</Text>
    </MainPanel>
  );
}
