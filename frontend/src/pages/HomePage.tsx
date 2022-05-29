import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Flex,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { palette } from "../styles/customTheme.js";
import Card from "../components/Card";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Values />
    </>
  );
}

function AboutUs() {
  return (
    <Stack minH={"50vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text color={"blue.400"} as={"span"}>
              About Us
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            {`The project board is an exclusive resource for contract work. It's
            perfect for freelancers, agencies, and moonlighters.`}
          </Text>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
        />
      </Flex>
    </Stack>
  );
};

const Hero = () => {
  return (
    <Container maxW={"3xl"}>
      <Stack
        minH={"50vh"}
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
          <Text color={"blue.400"} as={"span"}>
            Welcome
          </Text>{" "}
        </Heading>
        <Text color={"gray.500"}>
          Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
          qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
          sed quia non numquam eius modi tempora.
        </Text>
        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Button
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Learn More
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

const Values = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} padding={10}>
      <Card
        cardTitle="statistics"
        cardDetail="testing, lorem ipsum, some information"
        cardButton="learn more"
      />
      <Card
        cardTitle="more statistics"
        cardDetail="testing, lorem ipsum, some information"
        cardButton="learn more"
      />
      <Card
        cardTitle="statistics"
        cardDetail="testing, lorem ipsum, some information"
        cardButton="learn more"
      />
    </SimpleGrid>
  );
};
