import { InfoIcon, CloseIcon } from "@chakra-ui/icons";
import { Stack, Heading, Text, Button, Center } from "@chakra-ui/react";
import React from "react";

import { palette } from "../styles/customTheme";

interface CardDetails {
  cardTitle: string;
  cardDetail: string;
  cardButton: string;
}

export default function Card(props: CardDetails) {
  return (
    <Stack
      spacing={2}
      w={"full"}
      maxW={"lg"}
      textAlign={"center"}
      margin={"auto"}
      padding={10}
    >
      <Stack direction={"row"} alignItems={"center"} margin={"auto"}>
        <Heading fontSize={{ base: "1xl", md: "2xl", lg: "2xl" }}>
          <Text color={palette.colors.primary["400"]} as={"span"}>
            {props.cardTitle}
          </Text>
        </Heading>
        <InfoIcon boxSize={{ base: "0.5em", md: "1em", lg: "1em" }} />
      </Stack>
      <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
        {props.cardDetail}
      </Text>
      <Button
        color={palette.colors.primary["400"]}
        _hover={{
          bg: palette.colors.primary["500"],
        }}
      >
        {props.cardButton}
      </Button>
    </Stack>
  );
}
