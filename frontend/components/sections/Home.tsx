import React from "react";
import { Button, Heading, Text, GridItem, Image, Grid } from "@chakra-ui/react";

import { Id } from "../../pages";

type Props = {
  id: Id;
};

export function Home(props: Props) {
  const { id } = props;
  return (
    <Grid templateColumns="repeat(2, 1fr)">
      <GridItem id={id}>
        <Heading>Haiven</Heading>
        <Text fontSize="2xl">
          Creating accessible technology and services to help victims find
          support.
        </Text>
        <Button>Join our newsletter (WIP)</Button>
      </GridItem>
      <GridItem>
        <Image src="/Haiven-Collaborating.svg" />
      </GridItem>
    </Grid>
  );
}
