import { Container, Heading, Text } from "@chakra-ui/layout";
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
        <Text textStyle="greyText">
          Haiven is a non-profit organization that is devoted to helping victims
          impacted by intimate partner violence. During our customer outreach,
          victims expressed a need for more accessible and tailored solutions,
          and a better understanding of the current resources that exist. Our
          company operates as a resource hub that focuses on creating our own
          solutions through building a suite of mobile and web applications that
          will improve the safety and well-being of victims through accessible
          and innovative technological solutions while guiding them to resource
          partners.
        </Text>
      </MainPanel>
    </Container>
  );
}
