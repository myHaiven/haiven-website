import React from "react";
import { Box, Heading, HStack, Text } from "@chakra-ui/react";

export function Stats() {
  return (
    <HStack>
      <Box>
        <Heading>In 2018...</Heading>
        <Text>There were 68 000 transition home admissions in Canada</Text>
      </Box>
      <Box>
        <Text>
          107,810 police reported intimate partner violence (IPV) in Canada, yet
          more than 1 in 10 men and women, approximately 2 million, self
          reported having experienced IPV in the past 12 months.
        </Text>
      </Box>
      <Box>
        <Text>
          At least 6.2 million people in Canada reported experiences of IPV in
          their lifetime.
        </Text>
        <Text>Data collected from Statistics Canada</Text>
      </Box>
    </HStack>
  );
}
