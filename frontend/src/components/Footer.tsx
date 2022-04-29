import {
  Button,
  Box,
  Divider,
  Image,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
import colors from "../styles/colors";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const imageMargin = useBreakpointValue({
    base: "auto",
    md: "none",
  });
  return (
    <Box
      py={{ base: 2 }}
      px={{ base: 4 }}
      as="footer"
      borderStyle={"solid"}
      borderColor={"gray.200"}
    >
      <Stack
        spacing="8"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        py={{ base: "12", md: "16" }}
      >
        <Stack spacing={{ base: "6", md: "8" }} align="start">
          <Stack direction={"row"}>
            <Image
              minH={"60px"}
              maxH={"80px"}
              src={Logo}
              alt="logo"
              margin={imageMargin}
            />
            <Text fontSize="20px" color={colors.primary} alignSelf={"center"}>
              Haiven
            </Text>
          </Stack>
          <Text color="muted">Create beautiful websites remarkably fast.</Text>
        </Stack>
        <Stack
          direction={{ base: "column-reverse", md: "column", lg: "row" }}
          spacing={{ base: "12", md: "8" }}
        >
          <FooterNav />
          <Stack spacing="4">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Connect with us!
            </Text>
            <Stack
              spacing="4"
              direction={{ base: "column", sm: "row" }}
              maxW={{ lg: "360px" }}
            >
              <Input placeholder="Enter your email" type="email" required />
              <Button variant="primary" type="submit" flexShrink={0}>
                Subscribe
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
      >
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Haiven Technologies, Inc. All rights
          reserved.
        </Text>
      </Stack>
    </Box>
  );
}

const FooterNav = () => {
  return (
    <Stack direction="row" spacing="8">
      {FOOTER_ITEMS.map((footerItem) => (
        <Stack spacing="4" minW="36" flex="1" key={footerItem.label}>
          <Text fontSize="sm" fontWeight="semibold" color="subtle">
            {footerItem.label}
          </Text>
          <Stack spacing="3" shouldWrapChildren>
            {footerItem.children.map((child) => (
              <Button
                _focus={{ boxShadow: "none" }}
                as="a"
                variant={"link"}
                href={"#"}
                key={child.label}
              >
                {child.label}
              </Button>
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

interface FooterItem {
  label: string;
  children?: Array<FooterItem>;
  href?: string;
}

const FOOTER_ITEMS: Array<FooterItem> = [
  {
    label: "Product",
    children: [
      {
        label: "How it works",
        href: "#",
      },
      {
        label: "Pricing",
        href: "#",
      },
      {
        label: "Use cases",
        href: "#",
      },
    ],
  },
  {
    label: "Legal",
    children: [
      {
        label: "Privacy",
        href: "#",
      },
      {
        label: "Terms",
        href: "#",
      },
      {
        label: "License",
        href: "#",
      },
    ],
  },
];
