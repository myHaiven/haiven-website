import { extendTheme, theme } from "@chakra-ui/react";

/**
 * Can't add these into variants because it hasn't been implemented yet
 * https://github.com/chakra-ui/chakra-ui/issues/1028
 * https://github.com/chakra-ui/chakra-ui/pull/3258
 */
export const headingFontSizeBreakpoints = { base: "3xl", md: "4xl", lg: "5xl" };

export const palette = extendTheme({
  colors: {
    // Generated from https://smart-swatch.netlify.app/#7DBCFF
    primary: {
      50: "#def3ff",
      100: "#b0d8ff",
      200: "#80bdff",
      300: "#50a3fe",
      400: "#2589fc",
      500: "#126fe4",
      600: "#0757b2",
      700: "#003e80",
      800: "#00254f",
      900: "#000c1f",
    },
  },
});

export const customTheme = extendTheme({
  components: {
    Button: {
      variants: {
        primary: {
          _hover: {
            bg: palette.colors.primary["100"],
          },
          bg: palette.colors.primary["200"],
          color: "white",
          display: { base: "none", md: "inline-flex" },
          fontSize: "sm",
          fontWeight: 600,
        },
        secondaryLink: (props) => ({
          ...theme.components.Button.variants.link(props),
          _focus: { boxShadow: "none" },
          fontSize: "sm",
          fontWeight: 400,
        }),
      },
    },
    Heading: {
      variants: {
        primaryColor: {
          color: palette.colors.primary["400"],
        },
      },
    },
    Link: {
      variants: {
        primary: {
          _focus: { boxShadow: "none" },
          _hover: {
            color: palette.colors.primary["100"],
            "text-decoration": "none",
          },
          color: palette.colors.primary["200"],
          fontSize: "sm",
          fontWeight: "500",
          p: "2",
        },
      },
    },
  },
});
