import { extendTheme, theme } from "@chakra-ui/react";

export const palette = extendTheme({
  colors: {
    primary: "#7DBCFF",
    secondary: "#C2E0FF",
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
        secondaryLink: {
          ...theme.components.Button.variants.link,
          _focus: { boxShadow: "none" },
          fontSize: "sm",
          fontWeight: 400,
        },
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
