import React from "react";
import { Box, Heading, Grid, GridItem, Text } from "@chakra-ui/react";

export function Focus() {
  return (
    <Box>
      <Heading paddingY="20px">Our Focus</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={10}>
        <GridItem boxShadow="2xl" p="15" rounded="60px" bg="white">
          <Heading as="h3" size="md" margin="10px">
            Brainstorming
          </Heading>
          <Text margin="10px">
            Partners propose problems and we work together to find feasible
            technological solutions.
          </Text>
        </GridItem>
        <GridItem boxShadow="2xl" p="15" rounded="60px" bg="white">
          <Heading as="h3" size="md" margin="10px">
            Development
          </Heading>
          <Text margin="10px">
            Our team works to either assist in implementation of existing
            solutions or develop tailored solutions in house where previous
            solutions are lacking.
          </Text>
        </GridItem>
        <GridItem boxShadow="2xl" p="15" rounded="60px" bg="white">
          <Heading as="h3" size="md" margin="10px">
            Continued Support
          </Heading>
          <Text margin="10px">
            Project handover is not the end of our time together, we will
            continue to support our partners through deployment and use of our
            applications.
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
}
