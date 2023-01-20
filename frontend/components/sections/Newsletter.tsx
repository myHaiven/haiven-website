import React from "react";
import {
  Button,
  Heading,
  Image,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { Id } from "../../pages";

type Props = {
  id: Id;
};

export function Newsletter(props: Props) {
  const { id } = props;
  return (
    <Grid templateColumns="repeat(2, 1fr)">
      <GridItem>
        <Image boxSize="80%" src="/Contact.svg" margin="0" />
      </GridItem>
      <GridItem>
        <VStack alignItems="left" id={id}>
          <Heading>{`Want to know what's next?`}</Heading>
          <Button>Join our newsletter (WIP)</Button>
        </VStack>
      </GridItem>
    </Grid>
  );
}
