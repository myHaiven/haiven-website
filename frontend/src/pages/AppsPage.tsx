import { Heading, Text } from "@chakra-ui/layout";
import React from "react";

import MainPanel from "../components/MainPanel";
import { headingFontSizeBreakpoints } from "../styles/customTheme";

export default function AppsPage() {
  return (
    <MainPanel>
      <Heading fontSize={headingFontSizeBreakpoints} variant="primaryColor">
        Apps
      </Heading>
      <Text variant="grey">Apps description here.</Text>
    </MainPanel>
  );
}
