import { Heading, Text } from "@chakra-ui/layout";
import React from "react";

import MainPanel from "../components/MainPanel";
import { headingFontSizeBreakpoints } from "../styles/customTheme";

export default function Partners() {
  return (
    <MainPanel>
      <Heading fontSize={headingFontSizeBreakpoints} variant="primaryColor">
        Partners
      </Heading>
      <Text variant="grey">Partners description here.</Text>
    </MainPanel>
  );
}
