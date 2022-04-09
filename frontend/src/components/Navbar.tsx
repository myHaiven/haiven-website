import {
  Box,
  Flex,
  Center,
  Text,
  IconButton,
  Button,
  Image,
  Stack,
  Collapse,
  Link,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import React from "react";
import colors from "../styles/colors";
import Logo from '../assets/logo.png';

import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';

export default function Navbaor() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start', aligh:'center' }} >
            <Image
              margin='auto'
              minH={'60px'}
              maxH={'80px'}
              width='auto'
              src={Logo}
              alt="logo"
            />
           
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={'a'}
            _focus={{ boxShadow: "none", }}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Sign In
          </Button>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={colors.primary}
            _hover={{
              bg: colors.secondary,
            }}>
            Sign Up
          </Button>
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
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Center key={navItem.label}>
              <Link
                p={2}
                _focus={{ boxShadow: "none", }}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={colors.primary}
                _hover={{
                    color:colors.secondary,
                }}>
                {navItem.label}
              </Link>
        </Center>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Box py={{ base: 2 }} px={{ base: 4 }}>
    <Stack direction={'column'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Center key={navItem.label}>
              <Link
                p={2}
                _focus={{ boxShadow: "none", }}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={colors.primary}
                _hover={{
                    color:colors.secondary,
                }}>
                {navItem.label}
              </Link>
        </Center>
      ))}
    </Stack>
    </Box>
  );
};


interface NavItem {
  label: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'About Us',
    href: '#',
  },
  {
    label: 'Our Team',
    href: '#',
  },
  {
    label: 'Our Partners',
    href: '#',
  },
  {
    label: 'Apps',
    href: '#',
  },
  {
    label: 'Contact',
    href: '#',
  },
];