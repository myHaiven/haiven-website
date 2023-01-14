import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export function Values() {
  return (
    <Box>
      <Heading>Our Values</Heading>
      <Box>
        <Box>
          <Heading>Privacy</Heading>
          <Text>
            Out utmost priority to ensure their privacy and safety. We do so by
            consulting multiple partners, industry experts, and legal
            requirements.
          </Text>
        </Box>
        <Box>
          <Heading>Human-Centered</Heading>
          <Text>
            The person always comes first. Whether that is our user, our
            partners, or our team, we put the needs of the person before the
            needs of our organization.
          </Text>
        </Box>
        <Box>
          <Heading>Collaborative</Heading>
          <Text>
            The best work happens when we work together. We believe in
            collaborating with as many people as we can, either through our
            volunteer and advisory team, or through our partnerships. We want to
            hear different perspectives, share different ideas, and work
            together to build products with meaning.
          </Text>
        </Box>
        <Box>
          <Heading>Freedom of Choice</Heading>
          <Text>
            We don’t always know what’s best for those we are supporting. Human
            lives are more complex than we could ever imagine or anticipate.
            Therefore, we are dedicated to giving our partners and their users
            the freedom to make their own decisions and choose what’s best for
            them.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
