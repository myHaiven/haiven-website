import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export function Values() {
  return (
    <VStack>
      <Heading>Our Values</Heading>
      <VStack gap={30}>
        <Grid templateColumns="repeat(4, 1fr)" gap={10}>
          <GridItem>
            <Image boxSize="80%" src="/Privacy.svg" />
          </GridItem>
          <GridItem colSpan={3}>
            <VStack alignItems="left">
              <Heading as="h3" size="md">
                Privacy
              </Heading>
              <Text>
                Out utmost priority to ensure their privacy and safety. We do so
                by consulting multiple partners, industry experts, and legal
                requirements.
              </Text>
            </VStack>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(4, 1fr)" gap={10}>
          <GridItem>
            <Image boxSize="60%" src="Human-Centered.svg" />
          </GridItem>
          <GridItem colSpan={3}>
            <VStack alignItems="left">
              <Heading as="h3" size="md">
                Human-Centered
              </Heading>
              <Text>
                The person always comes first. Whether that is our user, our
                partners, or our team, we put the needs of the person before the
                needs of our organization.
              </Text>
            </VStack>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(4, 1fr)" gap={10}>
          <GridItem>
            <Image boxSize="80%" src="/Collaborative.svg" margin="0" />
          </GridItem>
          <GridItem colSpan={3}>
            <VStack alignItems="left">
              <Heading as="h3" size="md">
                Collaborative
              </Heading>
              <Text>
                The best work happens when we work together. We believe in
                collaborating with as many people as we can, either through our
                volunteer and advisory team, or through our partnerships. We
                want to hear different perspectives, share different ideas, and
                work together to build products with meaning.
              </Text>
            </VStack>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(4, 1fr)" gap={10}>
          <GridItem>
            <Image boxSize="80%" src="/Freedom-of-Choice.svg" />
          </GridItem>
          <GridItem colSpan={3}>
            <VStack alignItems="left">
              <Heading as="h3" size="md">
                Freedom of Choice
              </Heading>
              <Text>
                We don’t always know what’s best for those we are supporting.
                Human lives are more complex than we could ever imagine or
                anticipate. Therefore, we are dedicated to giving our partners
                and their users the freedom to make their own decisions and
                choose what’s best for them.
              </Text>
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
    </VStack>
  );
}
