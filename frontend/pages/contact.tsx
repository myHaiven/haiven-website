import { Heading, Text } from "@chakra-ui/layout";
import React from "react";

import MainPanel from "../components/MainPanel";
import { headingFontSizeBreakpoints } from "../styles/customTheme";

export default function Contact() {
  return (
    <MainPanel>
      <Heading fontSize={headingFontSizeBreakpoints} variant="primaryColor">
        Contacts
      </Heading>
      <Text variant="grey">Contacts description here.</Text>
    </MainPanel>
  );
}
