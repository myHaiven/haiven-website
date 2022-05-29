import { extendTheme, theme } from "@chakra-ui/react";

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
            bg: palette.colors.secondary,
          },
          bg: palette.colors.primary,
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
    Link: {
      variants: {
        primary: {
          _focus: { boxShadow: "none" },
          _hover: {
            color: palette.colors.secondary,
            "text-decoration": "none",
          },
          color: palette.colors.primary,
          fontSize: "sm",
          fontWeight: "500",
          p: "2",
        },
      },
    },
  },
});
