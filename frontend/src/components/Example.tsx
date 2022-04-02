import { Text } from "@chakra-ui/layout";
import React from "react";

export default function Example() {
  for (const k in ["1", "2"]) {
    console.log("hello");
  }
  return <Text fontSize="6xl">Hello</Text>;
}
