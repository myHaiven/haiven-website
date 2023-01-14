import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export function Focus() {
  return (
    <Box>
      <Heading>Our Focus</Heading>
      <Box>
        <Box>
          <Heading>Brainstorming</Heading>
          <Text>
            Partners propose problems and we work together to find feasible
            technological solutions.
          </Text>
        </Box>
        <Box>
          <Heading>Development</Heading>
          <Text>
            Our team works to either assist in implementation of existing
            solutions or develop tailored solutions in house where previous
            solutions are lacking.
          </Text>
        </Box>
        <Box>
          <Heading>Continued Support</Heading>
          <Text>
            Project handover is not the end of our time together, we will
            continue to support our partners through deployment and use of our
            applications.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
