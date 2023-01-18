import React from "react";
import { Button, Heading, Text, VStack, Image, HStack } from "@chakra-ui/react";

import { Id } from "../../pages";

type Props = {
  id: Id;
};

export function Home(props: Props) {
  const { id } = props;
  return (
    <HStack justifyContent="center">
      <VStack id={id}>
        <Heading>Haiven</Heading>
        <Text>
          Creating accessible technology and services to help victims find
          support.
        </Text>
        <Button>Join our newsletter (WIP)</Button>
      </VStack>
      <Image src="/Haiven-Collaborating.svg" />
    </HStack>
  );
}
