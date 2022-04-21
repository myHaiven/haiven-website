import { extendTheme } from "@chakra-ui/react";

export const palette = extendTheme({
  colors: {
    primary: "#7DBCFF",
    secondary: "#C2E0FF",
  },
});

export const theme = extendTheme({
  components: {
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
