import React from "react";
import { Heading, Text, VStack } from "@chakra-ui/react";

import { Id } from "../../pages";

type Props = {
  id: Id;
};

export function Vision(props: Props) {
  const { id } = props;
  return (
    <VStack id={id}>
      <Heading>Vision</Heading>
      <Text>
        Our vision is to create accessible technology and services that aid
        organizations in helping individuals through the process of exiting an
        abusive relationship and ensuring they have the support to stay out of
        it.
      </Text>
      <Text>
        We understand that we are not experts in the realm of intimate partner
        violence, so we are here to support those who are.
      </Text>
    </VStack>
  );
}
