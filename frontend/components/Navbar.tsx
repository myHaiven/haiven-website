import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Center,
  IconButton,
  Button,
  Image,
  Stack,
  Collapse,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

import Logo from "../assets/logo.png";
import Link from "./ChakraNextLink";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  const imageMargin = useBreakpointValue({
    base: "auto",
    md: "none",
  });

  return (
    <Box>
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
          flex={{ base: 1, md: "auto" }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start", align: "center" }}
        >
          <Image
            minH={"60px"}
            maxH={"80px"}
            src={Logo}
            alt="logo"
            margin={imageMargin}
          />

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button as={"a"} variant={"secondaryLink"} href={"#"}>
            Sign In
          </Button>
          <Button variant="primary">Sign Up</Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      <NavList />
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: "none" }} direction={"column"}>
      <NavList />
    </Stack>
  );
};

const NavList = () => {
  return (
    <>
      {NAV_ITEMS.map((navItem) => (
        <Center key={navItem.label}>
          <Link href={navItem.href ?? "#"} variant="primary">
            {navItem.label}
          </Link>
        </Center>
      ))}
    </>
  );
};

interface NavItem {
  label: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Our Team",
    href: "/team",
  },
  {
    label: "Our Partners",
    href: "/partners",
  },
  {
    label: "Apps",
    href: "/apps",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];