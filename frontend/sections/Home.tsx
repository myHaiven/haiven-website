import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

import { Id } from "../pages/MainPage";

type Props = {
  id: Id;
};

export function Home(props: Props) {
  const { id } = props;
  return (
    <Box id={id}>
      <Heading>Haiven</Heading>
      <Text>
        Creating accessible technology and services to help victims find
        support.
      </Text>
      <Button>Join our newsletter (WIP)</Button>
    </Box>
  );
}
