import { Box, Stack, StackProps } from "@chakra-ui/react";
import React from "react";

export default function MainPanel({
  as = Box,
  minH = "50vh",
  py = { base: 20, md: 36 },
  spacing = { base: 8, md: 14 },
  textAlign = "center",
  ...props
}: StackProps) {
  const { ...rest } = props;

  return (
    <Stack
      as={as}
      minH={minH}
      py={py}
      spacing={spacing}
      textAlign={textAlign}
      {...rest}
    >
      {props.children}
    </Stack>
  );
}
