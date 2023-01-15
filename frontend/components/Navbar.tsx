import React from "react";
import {
  Box,
  Center,
  Flex,
  Image,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";

import { palette } from "../styles/customTheme";
import Link from "./ChakraNextLink";

export default function Navbar() {
  const imageMargin = useBreakpointValue({
    base: "auto",
    md: "none",
  });

  return (
    <Box backgroundColor="white" width="100%">
      <Flex
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"gray.200"}
        align={"center"}
      >
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start", align: "center" }}
        >
          <Image
            minH={"60px"}
            maxH={"80px"}
            src="/logo.png"
            alt="Haiven Logo"
            margin={imageMargin}
          />
        </Flex>

        <Flex flexDirection="row" gap={6} justify="flex-end" direction="row">
          <NavList />
        </Flex>
      </Flex>
    </Box>
  );
}

const NavbarLinkStyle = {
  _focus: { boxShadow: "none" },
  _hover: {
    color: palette.colors.secondary,
    "text-decoration": "none",
  },
  color: palette.colors.primary,
  fontSize: "sm",
  fontWeight: "500",
  p: "2",
};

function NavList() {
  return (
    <>
      {NAV_ITEMS.map((navItem) => (
        <Center key={navItem.label}>
          <Link href={navItem.href ?? "#"} style={NavbarLinkStyle}>
            {navItem.label}
          </Link>
        </Center>
      ))}
    </>
  );
}

interface NavItem {
  label: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About Us",
    href: "#vision",
  },
  {
    label: "Contact",
    href: "#newsletter",
  },
];
