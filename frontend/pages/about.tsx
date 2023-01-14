import { Container, Heading, Text } from "@chakra-ui/layout";
import React from "react";

import MainPanel from "../components/MainPanel";
import { headingFontSizeBreakpoints } from "../styles/customTheme";

export default function About() {
  return (
    <Container maxW={"3xl"}>
      <MainPanel>
        <Heading fontSize={headingFontSizeBreakpoints} variant="primaryColor">
          About Us
        </Heading>
        <Text variant="grey">
          During the onset of the COVID 19 pandemic there were continual reports
          of a rapid increase in family and intimate partner violence. As a
          reaction, Haiven began as an app created to tackle the rise in
          domestic violence cases. However, as development progressed as a
          collaborative effort with survivors, and specialists working within
          the realm of intimate partner violence we realized we could have a
          stronger impact as a support system for established organizations.
        </Text>
        <Text>
          Now, Haiven is a non-profit organization that is devoted to helping
          organizations that support those impacted by intimate partner
          violence. During our customer outreach, victims expressed a need for
          more accessible and tailored solutions, and a better understanding of
          the current resources that exist. Our company operates as a resource
          hub that focuses on supporting those working directly with victims
          through providing innovative technological solutions tailored to their
          needs.
        </Text>
      </MainPanel>
    </Container>
  );
}
