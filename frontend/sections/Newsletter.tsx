import React from "react";
import { Button, Heading, VStack } from "@chakra-ui/react";

import { Id } from "../pages/MainPage";

type Props = {
  id: Id;
};

export function Newsletter(props: Props) {
  const { id } = props;
  return (
    <VStack id={id}>
      <Heading>{"Want to know what's next?"}</Heading>
      <Button>Join our newsletter (WIP)</Button>
    </VStack>
  );
}
